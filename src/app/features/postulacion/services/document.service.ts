import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DocumentoAdjunto } from '../models/postulacion.types';

/**
 * Servicio para gestionar documentos adjuntos en postulaciones
 */
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentosSubject = new BehaviorSubject<DocumentoAdjunto[]>([]);
  public documentos$: Observable<DocumentoAdjunto[]> = this.documentosSubject.asObservable();
  
  private readonly MAX_FILE_SIZE = 4000000; // 4MB en bytes

  /**
   * Obtiene todos los documentos
   */
  getDocumentos(): DocumentoAdjunto[] {
    return this.documentosSubject.value;
  }

  /**
   * Agrega un nuevo documento
   */
  agregarDocumento(documento: DocumentoAdjunto): { success: boolean; error?: string } {
    // Validar nombre
    if (!documento.nombre || documento.nombre.trim() === '') {
      return { success: false, error: 'Por favor ingrese un nombre para el documento' };
    }

    // Validar archivo
    if (!documento.archivo) {
      return { success: false, error: 'Por favor seleccione un archivo' };
    }

    // Validar tamaño
    if (documento.archivo.size > this.MAX_FILE_SIZE) {
      return { 
        success: false, 
        error: `El archivo excede el tamaño máximo de ${this.formatFileSize(this.MAX_FILE_SIZE)}` 
      };
    }

    const documentos = this.documentosSubject.value;
    documentos.push({ ...documento });
    this.documentosSubject.next([...documentos]);
    
    return { success: true };
  }

  /**
   * Actualiza un documento existente
   */
  actualizarDocumento(documento: DocumentoAdjunto, nuevoArchivo?: File): { success: boolean; error?: string } {
    // Validar nombre
    if (!documento.nombre || documento.nombre.trim() === '') {
      return { success: false, error: 'Por favor ingrese un nombre para el documento' };
    }

    // Si hay un nuevo archivo, validarlo
    if (nuevoArchivo) {
      if (nuevoArchivo.size > this.MAX_FILE_SIZE) {
        return { 
          success: false, 
          error: `El archivo excede el tamaño máximo de ${this.formatFileSize(this.MAX_FILE_SIZE)}` 
        };
      }
      documento.archivo = nuevoArchivo;
      documento.nombreArchivo = nuevoArchivo.name;
    }

    const documentos = this.documentosSubject.value;
    const index = documentos.findIndex(d => d.id === documento.id);
    
    if (index === -1) {
      return { success: false, error: 'Documento no encontrado' };
    }

    documentos[index] = { ...documento };
    this.documentosSubject.next([...documentos]);
    
    return { success: true };
  }

  /**
   * Elimina un documento
   */
  eliminarDocumento(id: string): void {
    const documentos = this.documentosSubject.value.filter(doc => doc.id !== id);
    this.documentosSubject.next([...documentos]);
  }

  /**
   * Obtiene un documento por ID
   */
  getDocumentoById(id: string): DocumentoAdjunto | undefined {
    return this.documentosSubject.value.find(doc => doc.id === id);
  }

  /**
   * Limpia todos los documentos
   */
  limpiarDocumentos(): void {
    this.documentosSubject.next([]);
  }

  /**
   * Genera un ID único para un documento
   */
  generarId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  /**
   * Crea un nuevo documento vacío
   */
  crearDocumentoVacio(): DocumentoAdjunto {
    return {
      id: this.generarId(),
      nombre: '',
      archivo: null,
      nombreArchivo: '',
      fechaSubida: new Date()
    };
  }

  /**
   * Valida un archivo
   */
  validarArchivo(archivo: File): { valid: boolean; error?: string } {
    if (archivo.size > this.MAX_FILE_SIZE) {
      return { 
        valid: false, 
        error: `El archivo excede el tamaño máximo de ${this.formatFileSize(this.MAX_FILE_SIZE)}` 
      };
    }
    return { valid: true };
  }

  /**
   * Formatea el tamaño de un archivo
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Obtiene el tamaño total de todos los documentos
   */
  getTamanioTotal(): number {
    return this.documentosSubject.value.reduce((total, doc) => {
      return total + (doc.archivo?.size || 0);
    }, 0);
  }

  /**
   * Obtiene el número total de documentos
   */
  getCantidadDocumentos(): number {
    return this.documentosSubject.value.length;
  }
}

