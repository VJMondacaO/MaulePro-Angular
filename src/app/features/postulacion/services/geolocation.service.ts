import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ubicacion } from '../models/postulacion.types';

/**
 * Tipos para eventos de Google Maps
 */
interface MapClickEvent {
  latLng: {
    lat: () => number;
    lng: () => number;
  };
}

interface MarkerDragEndEvent {
  latLng: {
    lat: () => number;
    lng: () => number;
  };
}

interface MapErrorEvent {
  type?: string;
  message?: string;
}

/**
 * Tipos para Google Maps (declaración mínima para evitar usar 'any')
 */
interface GoogleMaps {
  maps: {
    Map: new (element: HTMLElement, options: MapOptions) => Map;
    Geocoder: new () => Geocoder;
    Marker: new (options: MarkerOptions) => Marker;
    places: {
      Autocomplete: new (input: HTMLInputElement, options: AutocompleteOptions) => Autocomplete;
    };
    event: {
      addListener: (instance: Map | Marker, eventName: string, handler: (event: MapErrorEvent | MapClickEvent | MarkerDragEndEvent) => void) => void;
    };
    MapTypeId: {
      ROADMAP: string;
    };
    Animation: {
      DROP: string;
    };
  };
}

interface MapOptions {
  center: { lat: number; lng: number };
  zoom: number;
  scrollwheel: boolean;
  mapTypeId: string;
}

interface MarkerOptions {
  position: { lat: number; lng: number };
  map: Map | null;
  draggable: boolean;
  animation: string;
}

interface Geocoder {
  geocode(request: GeocodeRequest, callback: (results: GeocodeResult[], status: string) => void): void;
}

interface GeocodeRequest {
  address?: string;
  location?: { lat: number; lng: number };
  region?: string;
  componentRestrictions?: { country: string };
}

interface GeocodeResult {
  formatted_address: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}

interface Marker {
  setMap(map: Map | null): void;
  addListener(eventName: string, handler: (event: MarkerDragEndEvent) => void): void;
}

interface Map {
  setCenter(location: { lat: number; lng: number }): void;
  setZoom(zoom: number): void;
  addListener(eventName: string, handler: (event: MapClickEvent) => void): void;
}

interface Autocomplete {
  getPlace(): Place;
  addListener(eventName: string, handler: () => void): void;
}

interface Place {
  formatted_address?: string;
  geometry?: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}

interface AutocompleteOptions {
  types: string[];
  componentRestrictions: { country: string };
  fields: string[];
}

declare var google: GoogleMaps;

/**
 * Servicio para manejar la geolocalización y Google Maps
 */
@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements OnDestroy {
  private map: Map | null = null;
  private geocoder: Geocoder | null = null;
  private marker: Marker | null = null;
  private autocomplete: Autocomplete | null = null;
  private mapCheckInterval: ReturnType<typeof setInterval> | null = null;
  
  private ubicacionSubject = new BehaviorSubject<Ubicacion | null>(null);
  public ubicacion$: Observable<Ubicacion | null> = this.ubicacionSubject.asObservable();
  
  private direccionSubject = new BehaviorSubject<string>('');
  public direccion$: Observable<string> = this.direccionSubject.asObservable();
  
  private errorSubject = new BehaviorSubject<string | null>(null);
  public error$: Observable<string | null> = this.errorSubject.asObservable();

  // Coordenadas por defecto: Región del Maule (Talca)
  private readonly DEFAULT_LAT = -35.423615;
  private readonly DEFAULT_LNG = -71.649860;
  private readonly MAX_ATTEMPTS = 100;
  private readonly CHECK_INTERVAL = 100;

  ngOnDestroy(): void {
    this.cleanup();
  }

  /**
   * Inicializa Google Maps en el elemento especificado
   */
  initializeMap(mapElementId: string, initialLocation?: Ubicacion | null): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof google !== 'undefined' && google.maps) {
        this.initMap(mapElementId, initialLocation);
        resolve();
        return;
      }

      // Listener global para errores de carga
      interface WindowWithGoogleMaps extends Window {
        gm_authFailure?: () => void;
      }
      (window as WindowWithGoogleMaps).gm_authFailure = () => {
        this.handleMapError({ type: 'ApiNotActivatedMapError' });
        reject(new Error('Google Maps API authentication failed'));
      };

      // Esperar a que Google Maps se cargue
      let attempts = 0;
      this.mapCheckInterval = setInterval(() => {
        attempts++;
        if (typeof google !== 'undefined' && google.maps) {
          if (this.mapCheckInterval) {
            clearInterval(this.mapCheckInterval);
            this.mapCheckInterval = null;
          }
          setTimeout(() => {
            this.initMap(mapElementId, initialLocation);
            resolve();
          }, 100);
        } else if (attempts >= this.MAX_ATTEMPTS) {
          if (this.mapCheckInterval) {
            clearInterval(this.mapCheckInterval);
            this.mapCheckInterval = null;
          }
          const error = new Error('Google Maps API no se pudo cargar');
          this.handleMapError({ type: 'ApiNotActivatedMapError' });
          reject(error);
        }
      }, this.CHECK_INTERVAL);
    });
  }

  /**
   * Inicializa el mapa
   */
  private initMap(mapElementId: string, initialLocation?: Ubicacion | null): void {
    if (typeof google === 'undefined' || !google.maps) {
      this.errorSubject.next('Google Maps API no está cargada');
      return;
    }

    const mapElement = document.getElementById(mapElementId);
    if (!mapElement) {
      this.errorSubject.next('Elemento del mapa no encontrado');
      return;
    }

    const location = initialLocation || { lat: this.DEFAULT_LAT, lng: this.DEFAULT_LNG };

    try {
      this.map = new google.maps.Map(mapElement, {
        center: { lat: location.lat, lng: location.lng },
        zoom: 11,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.geocoder = new google.maps.Geocoder();

      // Listener para errores del mapa
      google.maps.event.addListener(this.map, 'error', (error: MapErrorEvent | MapClickEvent | MarkerDragEndEvent) => {
        this.handleMapError(error as MapErrorEvent);
      });

      // Listener para clics en el mapa
      this.map.addListener('click', (event: MapClickEvent) => {
        const clickedLocation: Ubicacion = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };
        this.addMarker(clickedLocation);
        this.updateUbicacion(clickedLocation);
      });

      // Agregar marcador inicial
      this.addMarker(location);
      this.updateUbicacion(location);

    } catch (error: unknown) {
      const mapError: MapErrorEvent = error instanceof Error 
        ? { type: 'Error', message: error.message }
        : { type: 'UnknownError' };
      this.handleMapError(mapError);
    }
  }

  /**
   * Agrega un marcador en la ubicación especificada
   */
  addMarker(location: Ubicacion): void {
    if (!this.map || typeof google === 'undefined' || !google.maps) {
      return;
    }

    // Eliminar marcador anterior si existe
    if (this.marker) {
      this.marker.setMap(null);
    }

    // Crear nuevo marcador
    this.marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP
    });

    // Listener para cuando se arrastra el marcador
    this.marker.addListener('dragend', (event: MarkerDragEndEvent) => {
      const newLocation: Ubicacion = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.updateUbicacion(newLocation);
      this.reverseGeocode(newLocation);
    });
  }

  /**
   * Inicializa el autocompletado de direcciones
   */
  initializeAutocomplete(inputElementId: string): void {
    if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
      return;
    }

    setTimeout(() => {
      const addressInput = document.getElementById(inputElementId) as HTMLInputElement;
      if (!addressInput) {
        return;
      }

      this.autocomplete = new google.maps.places.Autocomplete(addressInput, {
        types: ['address'],
        componentRestrictions: { country: 'cl' },
        fields: ['formatted_address', 'geometry']
      });

      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete?.getPlace();
        if (place?.geometry) {
          const location: Ubicacion = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };
          
          if (this.map) {
            this.map.setCenter(location);
            this.map.setZoom(15);
          }
          
          this.addMarker(location);
          this.updateUbicacion(location);
          
          if (place.formatted_address) {
            this.direccionSubject.next(place.formatted_address);
          }
        }
      });
    }, 200);
  }

  /**
   * Busca una dirección y actualiza el mapa
   */
  searchAddress(address: string): Promise<Ubicacion> {
    return new Promise((resolve, reject) => {
      if (!this.geocoder) {
        reject(new Error('El servicio de mapas aún no está disponible'));
        return;
      }

      if (!this.map) {
        reject(new Error('El mapa aún no está cargado'));
        return;
      }

      this.geocoder.geocode({
        address: address,
        region: 'cl',
        componentRestrictions: { country: 'cl' }
      }, (results: GeocodeResult[], status: string) => {
        if (status === 'OK' && results && results.length > 0) {
          const location: Ubicacion = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          
          this.map?.setCenter(location);
          this.map?.setZoom(15);
          this.addMarker(location);
          this.updateUbicacion(location);
          
          if (results[0].formatted_address) {
            this.direccionSubject.next(results[0].formatted_address);
          }
          
          resolve(location);
        } else {
          const errorMessage = this.getGeocodeErrorMessage(status);
          this.errorSubject.next(errorMessage);
          reject(new Error(errorMessage));
        }
      });
    });
  }

  /**
   * Geocodificación inversa (coordenadas -> dirección)
   */
  reverseGeocode(location: Ubicacion): void {
    if (!this.geocoder) {
      return;
    }

    this.geocoder.geocode({
      location: { lat: location.lat, lng: location.lng },
      region: 'cl'
    }, (results: GeocodeResult[], status: string) => {
      if (status === 'OK' && results && results.length > 0) {
        this.direccionSubject.next(results[0].formatted_address);
      }
    });
  }

  /**
   * Actualiza la ubicación actual
   */
  updateUbicacion(location: Ubicacion): void {
    this.ubicacionSubject.next(location);
  }

  /**
   * Obtiene la ubicación actual
   */
  getUbicacion(): Ubicacion | null {
    return this.ubicacionSubject.value;
  }

  /**
   * Obtiene la dirección actual
   */
  getDireccion(): string {
    return this.direccionSubject.value;
  }

  /**
   * Actualiza la dirección manualmente
   */
  setDireccion(direccion: string): void {
    this.direccionSubject.next(direccion);
  }

  /**
   * Maneja errores del mapa
   */
  private handleMapError(error: MapErrorEvent | Error | unknown): void {
    let mensaje = 'Error al cargar el mapa.';
    
    // Convertir error a MapErrorEvent si es necesario
    let mapError: MapErrorEvent;
    if (error && typeof error === 'object' && 'type' in error) {
      mapError = error as MapErrorEvent;
    } else if (error instanceof Error) {
      mapError = { type: 'Error', message: error.message };
    } else {
      mapError = { type: 'UnknownError' };
    }
    
    if (mapError.type === 'ApiNotActivatedMapError' || 
        mapError.message?.includes('ApiNotActivated')) {
      mensaje = 'ERROR: La API de Google Maps no está activada. Por favor, active las siguientes APIs en Google Cloud Console: Maps JavaScript API, Places API, Geocoding API.';
    } else if (mapError.message?.includes('RefererNotAllowed')) {
      mensaje = 'ERROR: Su dominio no está autorizado para usar esta API key.';
    } else if (mapError.message?.includes('InvalidKey')) {
      mensaje = 'ERROR: La API key no es válida.';
    }
    
    this.errorSubject.next(mensaje);
  }

  /**
   * Obtiene mensaje de error para geocodificación
   */
  private getGeocodeErrorMessage(status: string): string {
    switch (status) {
      case 'ZERO_RESULTS':
        return 'No se encontraron resultados para esta dirección. Por favor, intente con otra dirección.';
      case 'OVER_QUERY_LIMIT':
        return 'Se ha excedido el límite de consultas. Por favor, intente más tarde.';
      case 'REQUEST_DENIED':
        return 'La solicitud fue denegada. Verifique la configuración de la API key.';
      default:
        return 'No se pudo encontrar la dirección.';
    }
  }

  /**
   * Limpia recursos
   */
  cleanup(): void {
    if (this.mapCheckInterval) {
      clearInterval(this.mapCheckInterval);
      this.mapCheckInterval = null;
    }
    
    if (this.marker) {
      this.marker.setMap(null);
      this.marker = null;
    }
    
    this.map = null;
    this.geocoder = null;
    this.autocomplete = null;
  }

  /**
   * Muestra un error en el elemento del mapa
   */
  showErrorInMapElement(mapElementId: string, error: MapErrorEvent | Error | unknown): void {
    const mapElement = document.getElementById(mapElementId);
    if (!mapElement) {
      return;
    }

    // Convertir error a MapErrorEvent si es necesario
    let mapError: MapErrorEvent;
    if (error && typeof error === 'object' && 'type' in error) {
      mapError = error as MapErrorEvent;
    } else if (error instanceof Error) {
      mapError = { type: 'Error', message: error.message };
    } else {
      mapError = { type: 'UnknownError' };
    }

    let mensaje = 'Error al cargar el mapa.';
    let tipoError = '';
    
    if (mapError.type === 'ApiNotActivatedMapError' || 
        mapError.message?.includes('ApiNotActivated')) {
      tipoError = 'ApiNotActivated';
      mensaje = 'ERROR: La API de Google Maps no está activada.\n\n' +
                'Por favor, active las siguientes APIs en Google Cloud Console:\n\n' +
                '1. Maps JavaScript API\n' +
                '2. Places API\n' +
                '3. Geocoding API\n\n' +
                'Pasos:\n' +
                '1. Visite: https://console.cloud.google.com/apis/library\n' +
                '2. Busque cada API y haga clic en "Habilitar"\n' +
                '3. Espere unos minutos y recargue la página\n\n' +
                'Asegúrese de que su API key tenga permisos para estas APIs.';
    }
    
    mapElement.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; color: #856404; padding: 30px; text-align: center; flex-direction: column;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">⚠️</div>
        <h3 style="margin: 0 0 1rem 0; color: #856404; font-size: 1.5rem;">Error al cargar el mapa</h3>
        <div style="max-width: 600px; line-height: 1.6; text-align: left; background: white; padding: 20px; border-radius: 8px; margin-top: 1rem;">
          ${mensaje.split('\n').map(line => `<p style="margin: 0.5rem 0;">${line}</p>`).join('')}
        </div>
        ${tipoError === 'ApiNotActivated' ? `
          <a href="https://console.cloud.google.com/apis/library" target="_blank" 
             style="margin-top: 1.5rem; padding: 12px 24px; background: #0066CC; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Abrir Google Cloud Console
          </a>
        ` : ''}
      </div>
    `;
  }
}

