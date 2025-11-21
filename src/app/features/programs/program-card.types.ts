/**
 * Interfaz para los datos de la card de programa
 */
export interface ProgramCardData {
  id?: string;
  titulo: string;
  descripcion: string;
  estado: 'open' | 'soon' | 'closed';
  fechaInicio: string;
  fechaFin: string;
  fechaCierre?: string; // Formato: YYYY-MM-DD para calcular días restantes
  beneficiarios: string;
  montos: string;
  tipoFondo?: string; // Ej: "FNDR 8%"
  linkDetalles?: string; // URL externa
  rutaDetalles?: string; // Ruta interna de Angular
}

