import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgramCardData } from '../program-card.types';

@Component({
  selector: 'app-card-v7',
  standalone: true,
  imports: [CommonModule, RouterModule, Card, Tag, ButtonModule],
  templateUrl: './card-v7.component.html',
  styleUrl: './card-v7.component.css'
})
export class CardV7Component {
  @Input() program!: ProgramCardData;

  getDiasRestantes(): number | null {
    if (!this.program.fechaCierre) return null;
    const fechaCierre = new Date(this.program.fechaCierre);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    fechaCierre.setHours(0, 0, 0, 0);
    const diferencia = fechaCierre.getTime() - hoy.getTime();
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias > 0 ? dias : null;
  }

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
      case 'open': return '#018484';
      case 'soon': return '#ffc107';
      case 'closed': return '#FE6565';
      default: return '#999';
    }
  }

  isUrgent(): boolean {
    const dias = this.getDiasRestantes();
    return dias !== null && dias <= 30 && dias > 0;
  }
}

