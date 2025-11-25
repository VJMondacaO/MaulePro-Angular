import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ProgramsService } from '../services/programs.service';
import { ProgramDetailData } from '../models/program-detail.types';

// PrimeNG Components
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    TagModule,
    TabViewModule,
    AccordionModule,
    TableModule
  ],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css'
})
export class ProgramDetailComponent implements OnInit {
  program: ProgramDetailData | undefined;
  loading = true;
  
  // Estado de los accordions (cards expandibles)
  expandedModalidad = false;
  expandedTipoPostulante = false;
  expandedTipoFinanciamiento = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private programsService: ProgramsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Scroll al top al cargar el componente
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProgram(id);
      } else {
        // Si no hay ID, redirigir al home
        this.router.navigate(['/home']);
      }
    });
  }

  private loadProgram(id: string): void {
    this.loading = true;
    
    // Asegurar scroll al top al cargar un programa
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    const program = this.programsService.getProgramDetailById(id);
    
    if (!program) {
      // Programa no encontrado, redirigir al home
      this.router.navigate(['/home']);
      return;
    }

    this.program = program;
    this.loading = false;
  }

  getEstadoTagSeverity(): 'success' | 'warning' | 'danger' | 'info' {
    if (!this.program) return 'info';
    
    switch (this.program.estado) {
      case 'open':
        return 'success';
      case 'soon':
        return 'warning';
      case 'closed':
        return 'danger';
      default:
        return 'info';
    }
  }

  getEstadoTagText(): string {
    if (!this.program) return '';
    
    switch (this.program.estado) {
      case 'open':
        return 'ABIERTO';
      case 'soon':
        return 'PRÓXIMO';
      case 'closed':
        return 'CERRADO';
      default:
        return '';
    }
  }

  onPostularClick(): void {
    // TODO: Implementar redirección a login o postulación
    this.router.navigate(['/login']);
  }

  toggleAccordion(type: 'modalidad' | 'tipoPostulante' | 'tipoFinanciamiento'): void {
    // Verificar si la tarjeta seleccionada ya está abierta
    let isCurrentlyOpen = false;
    if (type === 'modalidad') {
      isCurrentlyOpen = this.expandedModalidad;
    } else if (type === 'tipoPostulante') {
      isCurrentlyOpen = this.expandedTipoPostulante;
    } else {
      isCurrentlyOpen = this.expandedTipoFinanciamiento;
    }
    
    // Cerrar todas las tarjetas
    this.expandedModalidad = false;
    this.expandedTipoPostulante = false;
    this.expandedTipoFinanciamiento = false;
    
    // Si la tarjeta seleccionada estaba cerrada, abrirla
    if (!isCurrentlyOpen) {
      if (type === 'modalidad') {
        this.expandedModalidad = true;
      } else if (type === 'tipoPostulante') {
        this.expandedTipoPostulante = true;
      } else {
        this.expandedTipoFinanciamiento = true;
      }
    }
  }

  getHeroBackgroundImage(): SafeStyle {
    if (this.program?.imagenHero) {
      // Codificar la ruta de la imagen para URL
      const imagePath = encodeURI(this.program.imagenHero);
      const style = `url('${imagePath}')`;
      return this.sanitizer.bypassSecurityTrustStyle(style);
    }
    return this.sanitizer.bypassSecurityTrustStyle('none');
  }

  hasHeroImage(): boolean {
    return !!this.program?.imagenHero;
  }
}
