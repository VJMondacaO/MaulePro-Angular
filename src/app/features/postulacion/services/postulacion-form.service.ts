import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostulacionFormData } from '../models/postulacion.types';
import { getComunasByProvincia } from '../../../shared/constants/dropdown-options.constants';

/**
 * Servicio para manejar la lógica del formulario de postulación
 */
@Injectable({
  providedIn: 'root'
})
export class PostulacionFormService {
  private formSubject = new BehaviorSubject<FormGroup | null>(null);
  public form$: Observable<FormGroup | null> = this.formSubject.asObservable();

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  /**
   * Inicializa el formulario
   */
  initializeForm(): FormGroup {
    const form = this.fb.group({
      // Información General
      cod1: [''],
      proceso_presupuestario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      item_nombre: ['', Validators.required],
      item_descriptor: [''],
      item_etapa_postulacion: [''],
      item_sector: ['', Validators.required],
      item_subsector: ['', Validators.required],
      item_provincia: ['', Validators.required],
      item_comuna: ['', Validators.required],
      item_competencia: ['', Validators.required],
      item_distrito: [''],
      item_circunscripcion: [''],
      item_proyectorel: [''],
      item_seia: [''],
      justificacion_proyecto: ['', Validators.required],
      descripcion_proyecto: ['', Validators.required],
      item_des_indigena: ['', Validators.required],
      addressmap: [''],
      lat: [''],
      lng: [''],
      
      // Financiamiento
      presup1: [0],
      
      // Instituciones
      item_insti_formuladora: [''],
      item_insti_financiera: [''],
      institucion_tecnica_a_cargo: [''],
      
      // Resultados del Proyecto
      duracion_proyecto: [0],
      benef_hombres: [0],
      benef_mujeres: [0],
      benef_total: [0],
      item_magnitud_valor: [''],
      item_magnitud: [''],
      
      // Información de Contacto
      nombre_responsable: ['', Validators.required],
      responsable_email: ['', [Validators.required, Validators.email]],
      responsable_fono: ['', Validators.required],
      
      // Ordinario u Oficio
      num_ordinal: [''],
      ordinal_fecha: [''],
      remitente: [''],
      remite_comuna: ['']
    });

    // Configurar listeners para cambios
    this.setupFormListeners(form);
    
    this.formSubject.next(form);
    return form;
  }

  /**
   * Configura listeners para cambios en el formulario
   */
  private setupFormListeners(form: FormGroup): void {
    // Actualizar comunas cuando cambia la provincia
    form.get('item_provincia')?.valueChanges.subscribe(provincia => {
      this.updateComunas(form, provincia);
    });

    // Calcular total de beneficiarios
    form.get('benef_hombres')?.valueChanges.subscribe(() => {
      this.calcularTotalBeneficiarios(form);
    });

    form.get('benef_mujeres')?.valueChanges.subscribe(() => {
      this.calcularTotalBeneficiarios(form);
    });
  }

  /**
   * Actualiza las opciones de comunas según la provincia seleccionada
   */
  updateComunas(form: FormGroup, provincia: string): void {
    // Esta función se puede usar para actualizar las opciones en el componente
    // Por ahora solo limpiamos la comuna seleccionada
    form.patchValue({ item_comuna: '' }, { emitEvent: false });
  }

  /**
   * Obtiene las comunas para una provincia
   */
  getComunasForProvincia(provincia: string) {
    return getComunasByProvincia(provincia);
  }

  /**
   * Calcula el total de beneficiarios
   */
  calcularTotalBeneficiarios(form: FormGroup): void {
    const hombres = form.get('benef_hombres')?.value || 0;
    const mujeres = form.get('benef_mujeres')?.value || 0;
    const total = Number(hombres) + Number(mujeres);
    form.patchValue({ benef_total: total }, { emitEvent: false });
  }

  /**
   * Obtiene el formulario actual
   */
  getForm(): FormGroup | null {
    return this.formSubject.value;
  }

  /**
   * Valida el formulario
   */
  validateForm(): { valid: boolean; errors: string[] } {
    const form = this.getForm();
    if (!form) {
      return { valid: false, errors: ['Formulario no inicializado'] };
    }

    if (form.valid) {
      return { valid: true, errors: [] };
    }

    // Marcar todos los campos como touched
    Object.keys(form.controls).forEach(key => {
      form.get(key)?.markAsTouched();
    });

    // Obtener errores
    const errors: string[] = [];
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control?.invalid && control?.touched) {
        if (control.errors?.['required']) {
          errors.push(`El campo ${key} es requerido`);
        } else if (control.errors?.['email']) {
          errors.push(`El campo ${key} debe ser un email válido`);
        }
      }
    });

    return { valid: false, errors };
  }

  /**
   * Obtiene los datos del formulario
   */
  getFormData(): PostulacionFormData | null {
    const form = this.getForm();
    if (!form) {
      return null;
    }
    return form.value as PostulacionFormData;
  }

  /**
   * Actualiza la ubicación en el formulario
   */
  updateUbicacion(lat: number, lng: number): void {
    const form = this.getForm();
    if (form) {
      form.patchValue({
        lat: lat.toString(),
        lng: lng.toString()
      }, { emitEvent: false });
    }
  }

  /**
   * Actualiza la dirección en el formulario
   */
  updateDireccion(direccion: string): void {
    const form = this.getForm();
    if (form) {
      form.patchValue({
        addressmap: direccion
      }, { emitEvent: false });
    }
  }

  /**
   * Resetea el formulario
   */
  resetForm(): void {
    const form = this.getForm();
    if (form) {
      form.reset();
    }
  }

  /**
   * Carga datos en el formulario (útil para cargar borradores)
   */
  loadFormData(data: Partial<PostulacionFormData>): void {
    const form = this.getForm();
    if (form) {
      form.patchValue(data);
    }
  }
}

