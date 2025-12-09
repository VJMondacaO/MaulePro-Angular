import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
import { CheckboxModule } from 'primeng/checkbox';

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
    CheckboxModule,
    MapSelectorComponent,
    DocumentManagerComponent
  ],
  templateUrl: './postulacion.component.html',
  styleUrl: './postulacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostulacionComponent implements OnInit, OnDestroy {
  postulacionForm!: FormGroup;
  programaId: string | null = null;

  // Control del Wizard
  currentStep: number = 0;
  steps = [
    { label: 'Identificación', icon: 'pi pi-id-card', sections: [0, 1, 2, 3, 4, 5, 6] },
    { label: 'Descripción del Proyecto', icon: 'pi pi-file-edit', sections: [7, 8, 9, 10] },
    { label: 'Financiamiento', icon: 'pi pi-dollar', sections: [11, 12, 13] },
    { label: 'Impacto', icon: 'pi pi-chart-line', sections: [14, 15] },
    { label: 'Documentos Adjuntos', icon: 'pi pi-upload', sections: [16] },
    { label: 'Cierre', icon: 'pi pi-check-circle', sections: [17] }
  ];

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
    private geolocationService: GeolocationService,
    private cdr: ChangeDetectorRef
  ) {
    // Obtener formulario del servicio
    this.postulacionForm = this.formService.initializeForm();
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    this.route.paramMap.subscribe(params => {
      this.programaId = params.get('id');
      this.cdr.markForCheck();
    });

    // Actualizar comunas cuando cambia la provincia
    this.postulacionForm.get('item_provincia')?.valueChanges.subscribe(provincia => {
      this.updateComunas(provincia);
      this.cdr.markForCheck();
    });

    // Suscribirse a cambios de ubicación
    this.geolocationService.ubicacion$.subscribe(location => {
      if (location) {
        this.ubicacionActual = location;
        this.cdr.markForCheck();
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

    console.log('Guardando borrador:', formData);
    console.log('Documentos adjuntos:', documentos);
  }

  /**
   * Maneja cambios de ubicación desde el componente de mapa
   */
  onLocationChange(location: Ubicacion): void {
    this.ubicacionActual = location;
  }

  // Navegación del Wizard
  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.scrollToProgressBar();
      this.cdr.markForCheck();
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.scrollToProgressBar();
      this.cdr.markForCheck();
    }
  }

  goToStep(index: number): void {
    if (index >= 0 && index < this.steps.length) {
      this.currentStep = index;
      this.scrollToProgressBar();
      this.cdr.markForCheck();
    }
  }

  /**
   * Hace scroll suave hasta la barra de progreso
   */
  private scrollToProgressBar(): void {
    // Usar requestAnimationFrame para asegurar que el DOM se haya actualizado
    requestAnimationFrame(() => {
      setTimeout(() => {
        const progressBar = document.getElementById('progreso-postulacion');
        if (progressBar) {
          // Calcular el offset para que quede justo en la parte del porcentaje
          // El offset debe considerar el header y dejar la sección del porcentaje visible
          const headerOffset = 100; // Offset para que quede en la sección del porcentaje
          const elementPosition = progressBar.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition), // Asegurar que no sea negativo
            behavior: 'smooth'
          });
        }
      }, 150); // Delay aumentado para asegurar que el DOM se actualice completamente
    });
  }

  /**
   * Calcula el porcentaje de progreso basado en los pasos completados
   * El porcentaje refleja cuántos pasos has completado, no en cuál estás
   * Ejemplo: 6 pasos totales
   * - Paso 0 (primer paso, no completado): 0%
   * - Paso 1 (completaste paso 0): 1/5 = 20%
   * - Paso 2 (completaste paso 0 y 1): 2/5 = 40%
   * - Paso 5 (último paso - Cierre): 100%
   */
  getProgressPercentage(): number {
    if (this.steps.length === 0) return 0;
    
    // Si estás en el último paso (Cierre), mostrar 100%
    if (this.currentStep === this.steps.length - 1) {
      return 100;
    }
    
    // Para los demás pasos, calcular basado en pasos completados
    // Dividimos por (total - 1) porque el último paso siempre será 100%
    const totalPasosParaCalcular = this.steps.length - 1;
    const percentage = (this.currentStep / totalPasosParaCalcular) * 100;
    return Math.round(percentage * 100) / 100; // Redondear a 2 decimales para mejor precisión visual
  }

  /**
   * Calcula el porcentaje para la línea de conexión visual
   * La línea debe llegar hasta el paso actual para mejor feedback visual
   */
  getConnectionLinePercentage(): number {
    if (this.steps.length === 0) return 0;
    if (this.steps.length === 1) return 100;
    // La línea llega hasta el paso actual dividido por (total - 1) para que llegue al último paso
    const percentage = (this.currentStep / (this.steps.length - 1)) * 100;
    return Math.round(percentage * 100) / 100;
  }
}

