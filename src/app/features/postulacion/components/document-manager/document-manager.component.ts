import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { DocumentService } from '../../services/document.service';
import { DocumentoAdjunto } from '../../models/postulacion.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-document-manager',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FileUploadModule
  ],
  templateUrl: './document-manager.component.html',
  styleUrl: './document-manager.component.css'
})
export class DocumentManagerComponent implements OnInit, OnDestroy {
  documentos: DocumentoAdjunto[] = [];
  documentoSeleccionado: DocumentoAdjunto | null = null;
  mostrarDialog: boolean = false;
  archivoSeleccionado: File | null = null;
  error: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    // Suscribirse a cambios en documentos
    this.documentService.documentos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(documentos => {
        this.documentos = documentos;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Abre el diálogo para agregar un nuevo documento
   */
  abrirDialogNuevo(): void {
    this.documentoSeleccionado = this.documentService.crearDocumentoVacio();
    this.archivoSeleccionado = null;
    this.error = null;
    this.mostrarDialog = true;
  }

  /**
   * Abre el diálogo para editar un documento existente
   */
  abrirDialogEditar(documento: DocumentoAdjunto): void {
    this.documentoSeleccionado = {
      id: documento.id,
      nombre: documento.nombre,
      archivo: documento.archivo,
      nombreArchivo: documento.nombreArchivo,
      fechaSubida: documento.fechaSubida
    };
    this.archivoSeleccionado = documento.archivo;
    this.error = null;
    this.mostrarDialog = true;
  }

  /**
   * Cierra el diálogo
   */
  cerrarDialog(): void {
    this.mostrarDialog = false;
    this.documentoSeleccionado = null;
    this.archivoSeleccionado = null;
    this.error = null;
  }

  /**
   * Maneja la selección de archivo
   */
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Validar archivo
      const validacion = this.documentService.validarArchivo(file);
      if (!validacion.valid) {
        this.error = validacion.error || null;
        return;
      }

      this.archivoSeleccionado = file;
      this.error = null;

      if (this.documentoSeleccionado) {
        this.documentoSeleccionado.archivo = file;
        this.documentoSeleccionado.nombreArchivo = file.name;
        
        // Si no tiene nombre, usar el nombre del archivo sin extensión
        if (!this.documentoSeleccionado.nombre || this.documentoSeleccionado.nombre.trim() === '') {
          const nombreSinExtension = file.name.replace(/\.[^/.]+$/, '');
          this.documentoSeleccionado.nombre = nombreSinExtension;
        }
      }
    }
  }

  /**
   * Guarda el documento
   */
  guardarDocumento(): void {
    if (!this.documentoSeleccionado) {
      return;
    }

    this.error = null;

    // Verificar si es edición o nuevo
    const esEdicion = this.documentos.some(d => d.id === this.documentoSeleccionado?.id);

    if (esEdicion) {
      const resultado = this.documentService.actualizarDocumento(
        this.documentoSeleccionado,
        this.archivoSeleccionado || undefined
      );
      
      if (!resultado.success) {
        this.error = resultado.error || null;
        return;
      }
    } else {
      const resultado = this.documentService.agregarDocumento(this.documentoSeleccionado);
      
      if (!resultado.success) {
        this.error = resultado.error || null;
        return;
      }
    }

    this.cerrarDialog();
  }

  /**
   * Elimina un documento
   */
  eliminarDocumento(documento: DocumentoAdjunto): void {
    if (confirm('¿Está seguro de eliminar este documento?')) {
      this.documentService.eliminarDocumento(documento.id);
    }
  }

  /**
   * Formatea el tamaño del archivo
   */
  formatearTamano(bytes: number): string {
    return this.documentService.formatFileSize(bytes);
  }

  /**
   * Verifica si es edición
   */
  esEdicion(): boolean {
    if (!this.documentoSeleccionado) {
      return false;
    }
    return this.documentos.some(d => d.id === this.documentoSeleccionado?.id);
  }

  /**
   * Obtiene el tamaño total de todos los documentos
   */
  getTamanioTotal(): string {
    return this.formatearTamano(this.documentService.getTamanioTotal());
  }
}

