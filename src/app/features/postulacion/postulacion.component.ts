import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

// PrimeNG Components
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';

// Servicios
import { PostulacionFormService } from './services/postulacion-form.service';
import { DocumentService } from './services/document.service';
import { GeolocationService } from './services/geolocation.service';

// Componentes
import { MapSelectorComponent } from './components/map-selector/map-selector.component';
import { DocumentManagerComponent } from './components/document-manager/document-manager.component';

// Constantes
import {
  PROCESO_PRESUPUESTARIO_OPTIONS,
  PROVINCIA_OPTIONS,
  COMPETENCIA_OPTIONS,
  PROYECTO_REL_OPTIONS,
  SEIA_OPTIONS,
  DES_INDIGENA_OPTIONS,
  MAGNITUD_OPTIONS,
  REMITENTE_OPTIONS,
  getComunasByProvincia
} from '../../shared/constants/dropdown-options.constants';
import {
  INSTITUCIONES_FORMULADORAS,
  INSTITUCIONES_FINANCIERAS,
  INSTITUCIONES_TECNICAS
} from '../../shared/constants/instituciones.constants';

// Tipos
import { Ubicacion } from './models/postulacion.types';

@Component({
  selector: 'app-postulacion',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    TooltipModule,
    MapSelectorComponent,
    DocumentManagerComponent
  ],
  templateUrl: './postulacion.component.html',
  styleUrl: './postulacion.component.css'
})
export class PostulacionComponent implements OnInit, OnDestroy {
  postulacionForm!: FormGroup;
  programaId: string | null = null;

  // Control del acordeón
  activeIndex: number = 0;
  totalSections: number = 18; // Total de secciones del formulario (0-17)
  
  // Ubicación actual
  ubicacionActual: Ubicacion | null = null;

  // Opciones para dropdowns (usando constantes compartidas)
  procesoPresupuestarioOptions = PROCESO_PRESUPUESTARIO_OPTIONS;
  provinciaOptions = PROVINCIA_OPTIONS;
  comunaOptions = [{ label: 'Comuna Sin Definir', value: '' }];
  competenciaOptions = COMPETENCIA_OPTIONS;
  proyectoRelOptions = PROYECTO_REL_OPTIONS;
  seiaOptions = SEIA_OPTIONS;
  desIndigenaOptions = DES_INDIGENA_OPTIONS;
  magnitudOptions = MAGNITUD_OPTIONS;
  remitenteOptions = REMITENTE_OPTIONS;
  institucionesFormuladorasOptions = INSTITUCIONES_FORMULADORAS;
  institucionesFinancierasOptions = INSTITUCIONES_FINANCIERAS;
  institucionesTecnicasOptions = INSTITUCIONES_TECNICAS;

  constructor(
    private route: ActivatedRoute,
    private formService: PostulacionFormService,
    private documentService: DocumentService,
    private geolocationService: GeolocationService
  ) {
    // Obtener formulario del servicio
    this.postulacionForm = this.formService.initializeForm();
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    this.route.paramMap.subscribe(params => {
      this.programaId = params.get('id');
    });

    // Actualizar comunas cuando cambia la provincia
    this.postulacionForm.get('item_provincia')?.valueChanges.subscribe(provincia => {
      this.updateComunas(provincia);
    });

    // Suscribirse a cambios de ubicación
    this.geolocationService.ubicacion$.subscribe(location => {
      if (location) {
        this.ubicacionActual = location;
      }
    });
  }

  ngOnDestroy(): void {
    // Cleanup de servicios
    this.geolocationService.cleanup();
  }

  /**
   * Actualiza las opciones de comunas según la provincia seleccionada
   */
  private updateComunas(provincia: string): void {
    this.comunaOptions = this.formService.getComunasForProvincia(provincia);
    
    // Limpiar la selección de comuna cuando cambia la provincia
    this.postulacionForm.patchValue({ item_comuna: '' }, { emitEvent: false });
  }

  // Métodos para determinar si un dropdown debe tener filtro (más de 10 items)
  get shouldFilterComunas(): boolean {
    return this.comunaOptions.length > 10;
  }

  get shouldFilterMagnitud(): boolean {
    return this.magnitudOptions.length > 10;
  }

  get shouldFilterInstitucionesFormuladoras(): boolean {
    return this.institucionesFormuladorasOptions.length > 10;
  }

  get shouldFilterInstitucionesFinancieras(): boolean {
    return this.institucionesFinancierasOptions.length > 10;
  }

  get shouldFilterInstitucionesTecnicas(): boolean {
    return this.institucionesTecnicasOptions.length > 10;
  }

  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    const validacion = this.formService.validateForm();
    
    if (validacion.valid) {
      const formData = this.formService.getFormData();
      const documentos = this.documentService.getDocumentos();
      
      // Aquí se enviaría la postulación al backend
      // TODO: Implementar envío al backend
      console.log('Formulario válido:', formData);
      console.log('Documentos adjuntos:', documentos);
    } else {
      // Los errores ya están marcados en el servicio
      console.log('Formulario inválido:', validacion.errors);
    }
  }

  /**
   * Guarda un borrador del formulario
   */
  onSave(): void {
    const formData = this.formService.getFormData();
    const documentos = this.documentService.getDocumentos();
    
    // Guardar borrador sin validar
    // TODO: Implementar guardado de borrador
    console.log('Guardando borrador:', formData);
    console.log('Documentos adjuntos:', documentos);
  }

  /**
   * Maneja cambios de ubicación desde el componente de mapa
   */
  onLocationChange(location: Ubicacion): void {
    this.ubicacionActual = location;
  }

  // Métodos de navegación del acordeón
  siguiente(): void {
    if (this.activeIndex < this.totalSections - 1) {
      this.activeIndex++;
    }
  }

  anterior(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  irASeccion(index: number): void {
    if (index >= 0 && index < this.totalSections) {
      this.activeIndex = index;
    }
  }

  esPrimeraSeccion(): boolean {
    return this.activeIndex === 0;
  }

  esUltimaSeccion(): boolean {
    return this.activeIndex === this.totalSections - 1;
  }

  toggleSeccion(index: number): void {
    if (this.activeIndex === index) {
      // Si ya está abierta, no hacer nada o cerrarla
      // this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

}

