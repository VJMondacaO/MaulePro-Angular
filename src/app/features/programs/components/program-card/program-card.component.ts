import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgramCardData } from '../models/program-card.types';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule, RouterModule, Card, Tag, ButtonModule],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.css'
})
export class ProgramCardComponent {
  @Input() program!: ProgramCardData;

  /**
   * Obtiene el estado real del programa, verificando si el plazo ya cumplió
   */
  getEstadoReal(): 'open' | 'soon' | 'closed' {
    // Si el estado es 'open' y tiene fechaCierre, verificar si ya pasó
    if (this.program.estado === 'open' && this.program.fechaCierre) {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      
      const [year, month, day] = this.program.fechaCierre.split('-').map(Number);
      const fechaCierre = new Date(year, month - 1, day);
      fechaCierre.setHours(0, 0, 0, 0);
      
      // Si la fecha de cierre ya pasó, cambiar a 'closed'
      if (fechaCierre.getTime() < hoy.getTime()) {
        return 'closed';
      }
    }
    
    return this.program.estado;
  }

  getEstadoTag(): string {
    const estado = this.getEstadoReal();
    switch (estado) {
      case 'open': return 'ABIERTO';
      case 'soon': return 'PRÓXIMO';
      case 'closed': return 'CERRADO';
      default: return '';
    }
  }

  getEstadoSeverity(): 'success' | 'warning' | 'danger' {
    const estado = this.getEstadoReal();
    switch (estado) {
      case 'open': return 'success';
      case 'soon': return 'warning';
      case 'closed': return 'danger';
    }
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

  /**
   * Calcula los días restantes hasta la fecha de cierre
   */
  getDiasRestantes(): number | null {
    const estado = this.getEstadoReal();
    if (!this.program.fechaCierre || estado !== 'open') {
      return null;
    }

    // Obtener fecha actual en zona horaria local
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Resetear a medianoche para comparación precisa
    
    // Parsear fecha de cierre (formato: YYYY-MM-DD)
    const [year, month, day] = this.program.fechaCierre.split('-').map(Number);
    const fechaCierre = new Date(year, month - 1, day); // month - 1 porque Date usa 0-11 para meses
    fechaCierre.setHours(0, 0, 0, 0);
    
    // Calcular diferencia en días
    const diferenciaTiempo = fechaCierre.getTime() - hoy.getTime();
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    
    // Retornar null si la fecha ya pasó (diferencia negativa)
    if (diferenciaDias < 0) {
      return null;
    }
    
    return diferenciaDias;
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
    const estado = this.getEstadoReal();
    return estado === 'open' && this.getDiasRestantes() !== null;
  }

  /**
   * Divide el texto de beneficiarios en dos líneas si contiene "Instituciones Privadas sin Fines de Lucro"
   */
  getBeneficiariosDivididos(): string[] {
    const beneficiarios = this.program.beneficiarios || '';
    if (beneficiarios.includes('Instituciones Privadas sin Fines de Lucro')) {
      return ['Instituciones Privadas', 'sin Fines de Lucro'];
    }
    return [beneficiarios];
  }

  /**
   * Formatea una fecha en formato DD-MM-YYYY a formato DD/MM/AAAA
   * Ejemplo: "01-11-2025" -> "01/11/2025"
   */
  formatearFecha(fecha: string): string {
    if (!fecha) return '';
    
    try {
      // Parsear fecha en formato DD-MM-YYYY
      const partes = fecha.split('-');
      if (partes.length !== 3) return fecha;
      
      const dia = partes[0];
      const mes = partes[1];
      const año = partes[2];
      
      // Validar que sean números válidos
      if (isNaN(parseInt(dia, 10)) || isNaN(parseInt(mes, 10)) || isNaN(parseInt(año, 10))) {
        return fecha;
      }
      
      // Retornar formato: DD/MM/AAAA
      return `${dia}/${mes}/${año}`;
    } catch (error) {
      // Si hay algún error, retornar la fecha original
      return fecha;
    }
  }

  /**
   * Formatea el rango de fechas de postulación
   * Ejemplo: "01/11/2025 - 27/11/2025"
   */
  formatearRangoFechas(): string {
    if (!this.program.fechaInicio || !this.program.fechaFin) {
      return '';
    }
    
    const fechaInicioFormateada = this.formatearFecha(this.program.fechaInicio);
    const fechaFinFormateada = this.formatearFecha(this.program.fechaFin);
    
    return `${fechaInicioFormateada} - ${fechaFinFormateada}`;
  }
}
