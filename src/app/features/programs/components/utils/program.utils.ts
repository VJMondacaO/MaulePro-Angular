import { ProgramCardData } from '../models/program-card.types';

/**
 * Obtiene el estado real del programa, verificando si el plazo ya cumplió
 * @param programa - Datos del programa
 * @returns Estado real del programa ('open' | 'soon' | 'closed')
 */
export function getEstadoReal(programa: ProgramCardData): 'open' | 'soon' | 'closed' {
  if (programa.estado === 'open' && programa.fechaCierre) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const fechaCierre = parseFechaCierre(programa.fechaCierre);
    if (!fechaCierre) {
      return programa.estado;
    }
    
    fechaCierre.setHours(0, 0, 0, 0);
    
    if (fechaCierre.getTime() < hoy.getTime()) {
      return 'closed';
    }
  }
  
  return programa.estado;
}

/**
 * Parsea una fecha en formato YYYY-MM-DD a un objeto Date
 * @param fechaCierre - Fecha en formato YYYY-MM-DD
 * @returns Objeto Date o null si la fecha es inválida
 */
export function parseFechaCierre(fechaCierre: string): Date | null {
  if (!fechaCierre) {
    return null;
  }
  
  try {
    const [year, month, day] = fechaCierre.split('-').map(Number);
    
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return null;
    }
    
    const fecha = new Date(year, month - 1, day);
    
    // Verificar que la fecha sea válida
    if (isNaN(fecha.getTime())) {
      return null;
    }
    
    return fecha;
  } catch {
    return null;
  }
}

/**
 * Calcula los días restantes hasta la fecha de cierre
 * @param fechaCierre - Fecha de cierre en formato YYYY-MM-DD
 * @returns Número de días restantes o null si la fecha ya pasó o es inválida
 */
export function getDiasRestantes(fechaCierre: string | undefined): number | null {
  if (!fechaCierre) {
    return null;
  }

  const fechaCierreDate = parseFechaCierre(fechaCierre);
  if (!fechaCierreDate) {
    return null;
  }

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  fechaCierreDate.setHours(0, 0, 0, 0);
  
  const diferenciaTiempo = fechaCierreDate.getTime() - hoy.getTime();
  const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
  
  if (diferenciaDias < 0) {
    return null;
  }
  
  return diferenciaDias;
}

/**
 * Obtiene el texto para la etiqueta de días restantes
 * @param dias - Número de días restantes
 * @returns Texto formateado para mostrar
 */
export function getTextoPlazoDias(dias: number | null): string {
  if (dias === null) {
    return '';
  }
  
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
 * @param dias - Número de días restantes
 * @returns Severidad para el tag de PrimeNG
 */
export function getSeveridadDiasRestantes(dias: number | null): 'success' | 'warning' | 'danger' {
  if (dias === null) {
    return 'success';
  }
  
  if (dias <= 3) {
    return 'danger';
  } else if (dias <= 7) {
    return 'warning';
  } else {
    return 'success';
  }
}

/**
 * Formatea una fecha en formato DD-MM-YYYY a formato DD/MM/AAAA
 * @param fecha - Fecha en formato DD-MM-YYYY
 * @returns Fecha formateada como DD/MM/AAAA o la fecha original si hay error
 */
export function formatearFecha(fecha: string): string {
  if (!fecha) {
    return '';
  }
  
  try {
    const partes = fecha.split('-');
    if (partes.length !== 3) {
      return fecha;
    }
    
    const dia = partes[0];
    const mes = partes[1];
    const año = partes[2];
    
    if (isNaN(parseInt(dia, 10)) || isNaN(parseInt(mes, 10)) || isNaN(parseInt(año, 10))) {
      return fecha;
    }
    
    return `${dia}/${mes}/${año}`;
  } catch {
    return fecha;
  }
}

/**
 * Formatea el rango de fechas de postulación
 * @param fechaInicio - Fecha de inicio en formato DD-MM-YYYY
 * @param fechaFin - Fecha de fin en formato DD-MM-YYYY
 * @returns Rango formateado como "DD/MM/AAAA - DD/MM/AAAA"
 */
export function formatearRangoFechas(fechaInicio: string, fechaFin: string): string {
  if (!fechaInicio || !fechaFin) {
    return '';
  }
  
  const fechaInicioFormateada = formatearFecha(fechaInicio);
  const fechaFinFormateada = formatearFecha(fechaFin);
  
  return `${fechaInicioFormateada} - ${fechaFinFormateada}`;
}

/**
 * Obtiene el texto del estado para mostrar en tags
 * @param estado - Estado del programa
 * @returns Texto del estado en mayúsculas
 */
export function getEstadoTagText(estado: 'open' | 'soon' | 'closed'): string {
  switch (estado) {
    case 'open':
      return 'ABIERTO';
    case 'soon':
      return 'PRÓXIMO';
    case 'closed':
      return 'CERRADO';
    default:
      return '';
  }
}

/**
 * Obtiene la severidad del estado para tags de PrimeNG
 * @param estado - Estado del programa
 * @returns Severidad para el tag
 */
export function getEstadoTagSeverity(estado: 'open' | 'soon' | 'closed'): 'success' | 'warning' | 'danger' {
  switch (estado) {
    case 'open':
      return 'success';
    case 'soon':
      return 'warning';
    case 'closed':
      return 'danger';
  }
}

