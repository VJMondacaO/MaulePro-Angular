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
      case 'open': return 'rgba(0, 102, 204, 0.08)'; // Azul claro para abierta
      case 'soon': return '#FFE082'; // Amarillo para próxima (igual que botón)
      case 'closed': return '#6C757D'; // Gris para cerrada (igual que botón)
      default: return '#999';
    }
  }

  getEstadoTextColor(): string {
    switch (this.program.estado) {
      case 'open': return '#0066CC'; // Azul para abierta
      case 'soon': return '#333'; // Negro para próxima (igual que botón)
      case 'closed': return '#FFFFFF'; // Blanco para cerrada (igual que botón)
      default: return '#999';
    }
  }

  getEstadoBorderColor(): string {
    switch (this.program.estado) {
      case 'open': return 'rgba(0, 102, 204, 0.2)'; // Azul claro para abierta
      case 'soon': return '#FFE082'; // Amarillo para próxima
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

  /**
   * Calcula los días restantes hasta la fecha de cierre
   */
  getDiasRestantes(): number | null {
    if (!this.program.fechaCierre || this.program.estado !== 'open') {
      return null;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Resetear a medianoche para comparación precisa
    
    const fechaCierre = new Date(this.program.fechaCierre);
    fechaCierre.setHours(0, 0, 0, 0);
    
    const diferenciaTiempo = fechaCierre.getTime() - hoy.getTime();
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    
    return diferenciaDias > 0 ? diferenciaDias : 0;
  }

  /**
   * Obtiene el texto para la etiqueta de días restantes
   */
  getTextoPlazoDias(): string {
    const dias = this.getDiasRestantes();
    if (dias === null) return '';
    
    if (dias === 0) {
      return '¡Último día!';
    } else if (dias === 1) {
      return 'Queda 1 día';
    } else {
      return `Quedan ${dias} días`;
    }
  }

  /**
   * Obtiene la severidad de la etiqueta de días restantes según urgencia
   */
  getSeveridadDiasRestantes(): 'success' | 'warning' | 'danger' {
    const dias = this.getDiasRestantes();
    if (dias === null) return 'success';
    
    if (dias <= 3) {
      return 'danger'; // Rojo: 3 días o menos
    } else if (dias <= 7) {
      return 'warning'; // Amarillo: 7 días o menos
    } else {
      return 'success'; // Verde: más de 7 días
    }
  }

  /**
   * Verifica si debe mostrar la etiqueta de días restantes
   */
  mostrarDiasRestantes(): boolean {
    return this.program.estado === 'open' && this.getDiasRestantes() !== null;
  }
}
