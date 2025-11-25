import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ProgramsService } from '../services/programs.service';
import { ProgramDetailData } from '../models/program-detail.types';
import { getEstadoTagSeverity, getEstadoTagText } from '../utils/program.utils';

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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProgram(id);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  private loadProgram(id: string): void {
    this.loading = true;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    const program = this.programsService.getProgramDetailById(id);
    
    if (!program) {
      this.router.navigate(['/home']);
      return;
    }

    this.program = program;
    this.loading = false;
  }

  getEstadoTagSeverity(): 'success' | 'warning' | 'danger' | 'info' {
    if (!this.program) return 'info';
    return getEstadoTagSeverity(this.program.estado);
  }

  getEstadoTagText(): string {
    if (!this.program) return '';
    return getEstadoTagText(this.program.estado);
  }

  onPostularClick(): void {
    // TODO: Implementar redirección a login o postulación
    this.router.navigate(['/login']);
  }

  toggleAccordion(type: 'modalidad' | 'tipoPostulante' | 'tipoFinanciamiento'): void {
    let isCurrentlyOpen = false;
    if (type === 'modalidad') {
      isCurrentlyOpen = this.expandedModalidad;
    } else if (type === 'tipoPostulante') {
      isCurrentlyOpen = this.expandedTipoPostulante;
    } else {
      isCurrentlyOpen = this.expandedTipoFinanciamiento;
    }
    
    this.expandedModalidad = false;
    this.expandedTipoPostulante = false;
    this.expandedTipoFinanciamiento = false;
    
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
