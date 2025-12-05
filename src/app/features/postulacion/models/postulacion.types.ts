/**
 * Tipos e interfaces para el módulo de postulación
 */

/**
 * Documento adjunto en una postulación
 */
export interface DocumentoAdjunto {
  id: string;
  nombre: string;
  archivo: File | null;
  nombreArchivo: string;
  fechaSubida: Date;
}

/**
 * Ubicación geográfica (coordenadas)
 */
export interface Ubicacion {
  lat: number;
  lng: number;
}

/**
 * Datos del formulario de postulación
 */
export interface PostulacionFormData {
  // Información General
  cod1: string;
  proceso_presupuestario: string;
  email: string;
  item_nombre: string;
  item_descriptor: string;
  item_etapa_postulacion: string;
  item_sector: string;
  item_subsector: string;
  item_provincia: string;
  item_comuna: string;
  item_competencia: string;
  item_distrito: string;
  item_circunscripcion: string;
  item_proyectorel: string;
  item_seia: string;
  justificacion_proyecto: string;
  descripcion_proyecto: string;
  item_des_indigena: string;
  addressmap: string;
  lat: string;
  lng: string;
  
  // Financiamiento
  presup1: number;
  
  // Instituciones
  item_insti_formuladora: string;
  item_insti_financiera: string;
  institucion_tecnica_a_cargo: string;
  
  // Resultados del Proyecto
  duracion_proyecto: number;
  benef_hombres: number;
  benef_mujeres: number;
  benef_total: number;
  item_magnitud_valor: string;
  item_magnitud: string;
  
  // Información de Contacto
  nombre_responsable: string;
  responsable_email: string;
  responsable_fono: string;
  
  // Ordinario u Oficio
  num_ordinal: string;
  ordinal_fecha: string;
  remitente: string;
  remite_comuna: string;
}

