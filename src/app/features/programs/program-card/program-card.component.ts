import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgramCardData } from '../program-card.types';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule, RouterModule, Card, Tag, ButtonModule],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.css'
})
export class ProgramCardComponent {
  @Input() program!: ProgramCardData;

  getEstadoTag(): string {
    switch (this.program.estado) {
      case 'open': return 'ABIERTO';
      case 'soon': return 'PRÓXIMO';
      case 'closed': return 'CERRADO';
      default: return '';
    }
  }

  getEstadoSeverity(): 'success' | 'warning' | 'danger' {
    switch (this.program.estado) {
      case 'open': return 'success';
      case 'soon': return 'warning';
      case 'closed': return 'danger';
    }
  }

  getEstadoColor(): string {
    switch (this.program.estado) {
      case 'open': return '#0066CC'; // Azul para abierta
      case 'soon': return '#FFC107'; // Amarillo para próxima
      case 'closed': return '#6C757D'; // Gris para cerrada
      default: return '#999';
    }
  }

  getClaseEstado(): string {
    switch (this.program.estado) {
      case 'open': return 'estado-abierta';
      case 'soon': return 'estado-proxima';
      case 'closed': return 'estado-cerrada';
      default: return '';
    }
  }
}
