/**
 * Constantes para opciones de dropdowns compartidas en la aplicación
 */

export interface DropdownOption {
  label: string;
  value: string;
}

/**
 * Opciones para proceso presupuestario
 */
export const PROCESO_PRESUPUESTARIO_OPTIONS: DropdownOption[] = [
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' }
];

/**
 * Opciones para provincias de la Región del Maule
 */
export const PROVINCIA_OPTIONS: DropdownOption[] = [
  { label: 'Provincia Sin Definir', value: '' },
  { label: 'Talca', value: 'Talca' },
  { label: 'Curicó', value: 'Curicó' },
  { label: 'Linares', value: 'Linares' },
  { label: 'Cauquenes', value: 'Cauquenes' }
];

/**
 * Opciones para competencia
 */
export const COMPETENCIA_OPTIONS: DropdownOption[] = [
  { label: 'SELECCIONAR COMP. DE ANÁLISIS', value: '' },
  { label: 'NACIONAL', value: 'NACIONAL' },
  { label: 'REGIONAL', value: 'REGIONAL' }
];

/**
 * Opciones para proyecto relacionado
 */
export const PROYECTO_REL_OPTIONS: DropdownOption[] = [
  { label: 'SELECCIONAR', value: '' },
  { label: 'COMPLEMENTARIO', value: 'COMPLEMENTARIO' },
  { label: 'SIN RELACION', value: 'SIN RELACION' },
  { label: 'SUSTITUTO', value: 'SUSTITUTO' }
];

/**
 * Opciones para SEIA
 */
export const SEIA_OPTIONS: DropdownOption[] = [
  { label: 'NO CORRESPONDE', value: '' },
  { label: 'DECLARACIÓN', value: 'DECLARACION' },
  { label: 'ESTUDIO', value: 'ESTUDIO' }
];

/**
 * Opciones para desarrollo indígena
 */
export const DES_INDIGENA_OPTIONS: DropdownOption[] = [
  { label: 'Seleccionar una opción', value: '' },
  { label: 'SI', value: 'SI' },
  { label: 'NO', value: 'NO' }
];

/**
 * Opciones para magnitud
 */
export const MAGNITUD_OPTIONS: DropdownOption[] = [
  { label: 'Definir Unidad Medida', value: '' },
  { label: 'HECTAREA', value: 'HECTAREA' },
  { label: 'KILÓMETROS', value: 'KILOMETROS' },
  { label: 'KILOMETROS CUADRADOS', value: 'KILOMETROS CUADRADOS' },
  { label: 'METROS', value: 'METROS' },
  { label: 'METROS CUADRADOS', value: 'METROS CUADRADOS' },
  { label: 'METROS CUBICOS', value: 'METROS CUBICOS' },
  { label: 'METROS CÚBICOS / AÑO', value: 'METROS CUBICOS / AÑO' },
  { label: 'UNIDAD', value: 'UNIDAD' },
  { label: 'LOTE', value: 'LOTE' },
  { label: 'HABITANTE BENEFICIADO', value: 'HABITANTE BENEFICIADO' }
];

/**
 * Opciones para remitente
 */
export const REMITENTE_OPTIONS: DropdownOption[] = [
  { label: 'Seleccione', value: '' },
  { label: 'Sra. Alcaldesa', value: '1' },
  { label: 'Sr. Alcalde', value: '2' },
  { label: 'Sra. Directora', value: '3' },
  { label: 'Sr. Director', value: '4' }
];

/**
 * Mapeo de comunas por provincia
 */
export const COMUNAS_POR_PROVINCIA: { [key: string]: DropdownOption[] } = {
  'Talca': [
    { label: 'Seleccione Comuna', value: '' },
    { label: 'Constitución', value: 'Constitución' },
    { label: 'Curepto', value: 'Curepto' },
    { label: 'Empedrado', value: 'Empedrado' },
    { label: 'Maule', value: 'Maule' },
    { label: 'Pelarco', value: 'Pelarco' },
    { label: 'Pencahue', value: 'Pencahue' },
    { label: 'Río Claro', value: 'Río Claro' },
    { label: 'San Clemente', value: 'San Clemente' },
    { label: 'San Rafael', value: 'San Rafael' },
    { label: 'Talca', value: 'Talca' }
  ],
  'Curicó': [
    { label: 'Seleccione Comuna', value: '' },
    { label: 'Curicó', value: 'Curicó' },
    { label: 'Hualañé', value: 'Hualañé' },
    { label: 'Licantén', value: 'Licantén' },
    { label: 'Molina', value: 'Molina' },
    { label: 'Rauco', value: 'Rauco' },
    { label: 'Romeral', value: 'Romeral' },
    { label: 'Sagrada Familia', value: 'Sagrada Familia' },
    { label: 'Teno', value: 'Teno' },
    { label: 'Vichuquén', value: 'Vichuquén' }
  ],
  'Linares': [
    { label: 'Seleccione Comuna', value: '' },
    { label: 'Colbún', value: 'Colbún' },
    { label: 'Linares', value: 'Linares' },
    { label: 'Longaví', value: 'Longaví' },
    { label: 'Parral', value: 'Parral' },
    { label: 'Retiro', value: 'Retiro' },
    { label: 'San Javier', value: 'San Javier' },
    { label: 'Villa Alegre', value: 'Villa Alegre' },
    { label: 'Yerbas Buenas', value: 'Yerbas Buenas' }
  ],
  'Cauquenes': [
    { label: 'Seleccione Comuna', value: '' },
    { label: 'Cauquenes', value: 'Cauquenes' },
    { label: 'Chanco', value: 'Chanco' },
    { label: 'Pelluhue', value: 'Pelluhue' }
  ]
};

/**
 * Obtiene las comunas para una provincia específica
 */
export function getComunasByProvincia(provincia: string): DropdownOption[] {
  if (!provincia || !COMUNAS_POR_PROVINCIA[provincia]) {
    return [{ label: 'Comuna Sin Definir', value: '' }];
  }
  return COMUNAS_POR_PROVINCIA[provincia];
}

