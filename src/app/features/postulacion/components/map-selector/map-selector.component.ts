import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GeolocationService } from '../../services/geolocation.service';
import { Ubicacion } from '../../models/postulacion.types';

@Component({
  selector: 'app-map-selector',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './map-selector.component.html',
  styleUrl: './map-selector.component.css'
})
export class MapSelectorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() addressControl?: AbstractControl | null;
  @Input() latControl?: AbstractControl | null;
  @Input() lngControl?: AbstractControl | null;
  @Input() initialLocation?: Ubicacion | null;
  @Output() locationChange = new EventEmitter<Ubicacion>();

  direccion: string = '';
  error: string | null = null;
  loading = true;

  constructor(
    private geolocationService: GeolocationService
  ) {}

  ngOnInit(): void {
    // Inicializar dirección desde el control si existe
    if (this.addressControl) {
      this.direccion = this.addressControl.value || '';
    }

    // Suscribirse a cambios de ubicación
    this.geolocationService.ubicacion$.subscribe(location => {
      if (location) {
        // Actualizar controles del formulario
        if (this.latControl) {
          this.latControl.setValue(location.lat.toString(), { emitEvent: false });
        }
        if (this.lngControl) {
          this.lngControl.setValue(location.lng.toString(), { emitEvent: false });
        }
        this.locationChange.emit(location);
      }
    });

    // Suscribirse a cambios de dirección
    this.geolocationService.direccion$.subscribe(direccion => {
      this.direccion = direccion;
      if (this.addressControl) {
        this.addressControl.setValue(direccion, { emitEvent: false });
      }
    });

    // Suscribirse a errores
    this.geolocationService.error$.subscribe(error => {
      this.error = error;
      if (error) {
        this.geolocationService.showErrorInMapElement('map', { message: error });
      }
    });
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    this.geolocationService.cleanup();
  }

  /**
   * Inicializa el mapa
   */
  private async initializeMap(): Promise<void> {
    try {
      this.loading = true;
      await this.geolocationService.initializeMap('map', this.initialLocation || undefined);
      
      // Inicializar autocompletado
      this.geolocationService.initializeAutocomplete('addressmap-input');
      
      // Obtener ubicación inicial si existe
      const ubicacion = this.geolocationService.getUbicacion();
      if (ubicacion) {
        if (this.latControl) {
          this.latControl.setValue(ubicacion.lat.toString(), { emitEvent: false });
        }
        if (this.lngControl) {
          this.lngControl.setValue(ubicacion.lng.toString(), { emitEvent: false });
        }
        this.locationChange.emit(ubicacion);
      }
      
      const direccion = this.geolocationService.getDireccion();
      if (direccion) {
        this.direccion = direccion;
        if (this.addressControl) {
          this.addressControl.setValue(direccion, { emitEvent: false });
        }
      }
      
      this.loading = false;
    } catch (error) {
      this.error = 'Error al inicializar el mapa';
      this.loading = false;
    }
  }

  /**
   * Busca una dirección
   */
  buscarDireccion(): void {
    if (!this.direccion || !this.direccion.trim()) {
      this.error = 'Por favor, ingrese una dirección para buscar.';
      return;
    }

    this.loading = true;
    this.error = null;

    this.geolocationService.searchAddress(this.direccion.trim())
      .then(location => {
        this.loading = false;
        this.locationChange.emit(location);
      })
      .catch(error => {
        this.loading = false;
        this.error = error.message || 'Error al buscar la dirección';
      });
  }
}

