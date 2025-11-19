/**
 * Interfaces para los datos detallados de un programa
 */

export interface ProgramDetailData extends ProgramCardData {
  // Información básica extendida
  categoria: string;
  invita: string; // Quién invita (ej: "Gobierno Regional del Maule")
  alcance: string; // Alcance geográfico (ej: "Regional")
  fechaCierreFormateada?: string; // Fecha de cierre formateada para mostrar

  // Detalles del fondo (cards expandibles)
  modalidad: ProgramModalidad;
  tipoPostulante: ProgramTipoPostulante;
  tipoFinanciamiento: ProgramTipoFinanciamiento;

  // Contenido de tabs
  requisitos: ProgramRequisitos;
  documentacion: ProgramDocumentacion;
  evaluacion: ProgramEvaluacion;
  bases: ProgramBases;
  dudasConsultas: ProgramDudasConsultas;
}

export interface ProgramModalidad {
  tipo: string; // "Online", "Presencial", etc.
  icono: string; // Clase de icono PrimeIcons (ej: "pi-laptop")
  descripcion: string;
  linkPostulacion?: string;
}

export interface ProgramTipoPostulante {
  tipo: string; // "Personas Naturales y Jurídicas", etc.
  icono: string; // Clase de icono PrimeIcons
  descripcion: string;
}

export interface ProgramTipoFinanciamiento {
  tipo: string; // "Subvención", etc.
  icono: string; // Clase de icono PrimeIcons
  descripcion: string;
}

export interface ProgramRequisitos {
  introduccion?: string;
  items: Array<{
    titulo: string;
    descripcion: string;
  }>;
}

export interface ProgramDocumentacion {
  introduccion?: string;
  items: Array<{
    titulo: string;
    descripcion: string;
  }>;
  documentosDescarga?: Array<{
    nombre: string;
    url: string;
    tipo?: string; // "pdf", "doc", etc.
  }>;
}

export interface ProgramCriterioEvaluacion {
  nombre: string;
  ponderacion: string; // Ej: "10%", "25%"
}

export interface ProgramEvaluacion {
  introduccion?: string;
  etapas: Array<{
    titulo: string;
    descripcion?: string;
    items?: Array<{
      titulo: string;
      descripcion: string;
    }>;
  }>;
  criterios?: ProgramCriterioEvaluacion[];
  notasImportantes?: Array<{
    titulo?: string;
    descripcion: string;
  }>;
}

export interface ProgramBase {
  nombre: string;
  url: string;
}

export interface ProgramBases {
  bases: ProgramBase[];
}

export interface ProgramDudasConsultas {
  descripcion: string;
  horarios?: string;
  contacto?: string;
}

// Re-exportar ProgramCardData para uso
import { ProgramCardData } from './program-card.types';
export type { ProgramCardData };
