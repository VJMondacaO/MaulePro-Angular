import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgramCardData } from '../models/program-card.types';
import { 
  getEstadoReal, 
  getDiasRestantes, 
  getTextoPlazoDias, 
  getSeveridadDiasRestantes,
  formatearFecha,
  formatearRangoFechas,
  getEstadoTagText,
  getEstadoTagSeverity
} from '../utils/program.utils';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule, RouterModule, Card, Tag, ButtonModule],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.css'
})
export class ProgramCardComponent {
  @Input() program!: ProgramCardData;

  getEstadoReal(): 'open' | 'soon' | 'closed' {
    return getEstadoReal(this.program);
  }

  getEstadoTag(): string {
    return getEstadoTagText(this.getEstadoReal());
  }

  getEstadoSeverity(): 'success' | 'warning' | 'danger' {
    return getEstadoTagSeverity(this.getEstadoReal());
  }

  getEstadoColor(): string {
    const estado = this.getEstadoReal();
    switch (estado) {
      case 'open': return 'rgba(0, 102, 204, 0.08)'; // Azul claro para abierta
      case 'soon': return '#FFE082'; // Amarillo para próxima (igual que botón)
      case 'closed': return '#6C757D'; // Gris para cerrada (igual que botón)
      default: return '#999';
    }
  }

  getEstadoTextColor(): string {
    const estado = this.getEstadoReal();
    switch (estado) {
      case 'open': return '#0066CC'; // Azul para abierta
      case 'soon': return '#333'; // Negro para próxima (igual que botón)
      case 'closed': return '#FFFFFF'; // Blanco para cerrada (igual que botón)
      default: return '#999';
    }
  }

  getEstadoBorderColor(): string {
    const estado = this.getEstadoReal();
    switch (estado) {
      case 'open': return 'rgba(0, 102, 204, 0.2)'; // Azul claro para abierta
      case 'soon': return '#FFE082'; // Amarillo para próxima
      case 'closed': return '#6C757D'; // Gris para cerrada
      default: return '#999';
    }
  }

  getClaseEstado(): string {
    const estado = this.getEstadoReal();
    switch (estado) {
      case 'open': return 'estado-abierta';
      case 'soon': return 'estado-proxima';
      case 'closed': return 'estado-cerrada';
      default: return '';
    }
  }

  getDiasRestantes(): number | null {
    const estado = this.getEstadoReal();
    if (!this.program.fechaCierre || estado !== 'open') {
      return null;
    }
    return getDiasRestantes(this.program.fechaCierre);
  }

  getTextoPlazoDias(): string {
    const dias = this.getDiasRestantes();
    return getTextoPlazoDias(dias);
  }

  getSeveridadDiasRestantes(): 'success' | 'warning' | 'danger' {
    const dias = this.getDiasRestantes();
    return getSeveridadDiasRestantes(dias);
  }

  mostrarDiasRestantes(): boolean {
    const estado = this.getEstadoReal();
    return estado === 'open' && this.getDiasRestantes() !== null;
  }

  getBeneficiariosDivididos(): string[] {
    const beneficiarios = this.program.beneficiarios || '';
    if (beneficiarios.includes('Instituciones Privadas sin Fines de Lucro')) {
      return ['Instituciones Privadas', 'sin Fines de Lucro'];
    }
    return [beneficiarios];
  }

  formatearFecha(fecha: string): string {
    return formatearFecha(fecha);
  }

  formatearRangoFechas(): string {
    if (!this.program.fechaInicio || !this.program.fechaFin) {
      return '';
    }
    return formatearRangoFechas(this.program.fechaInicio, this.program.fechaFin);
  }
}
