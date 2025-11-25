import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProgramCardData } from '../programs/program-card.types';
import { ProgramsService } from '../programs/programs.service';
import { ProgramCardComponent } from '../programs/program-card/program-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroComponent, 
    ProgramCardComponent,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  programas: ProgramCardData[] = [];
  filteredPrograms: ProgramCardData[] = [];
  searchTerm: string = '';
  selectedEstado: string | null = null;
  selectedTipoFondo: string | null = null;

  estadoOptions = [
    { label: 'Abierto', value: 'open' },
    { label: 'Próximamente', value: 'soon' },
    { label: 'Cerrado', value: 'closed' }
  ];

  tipoFondoOptions: { label: string; value: string }[] = [];

  incentives = [
    {
      icon: 'pi pi-book',
      title: 'Paso 1: Revisa las bases',
      description: 'Lee los requisitos del fondo, verifica la eligibilidad de tu institución y los plazos de postulación.'
    },
    {
      icon: 'pi pi-pencil',
      title: 'Paso 2: Diseña tu proyecto',
      description: 'Define objetivo, beneficiarios, actividades y presupuesto según el formato solicitado.'
    },
    {
      icon: 'pi pi-upload',
      title: 'Paso 3: Sube tu postulación',
      description: 'Completa el formulario en línea y adjunta toda la documentación requerida antes del cierre.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Paso 4: Haz seguimiento',
      description: 'Revisa el estado de tu proyecto, responde observaciones y consulta los resultados de la evaluación.'
    }
  ];


  constructor(
    private programsService: ProgramsService,
    private router: Router
  ) {
    // Obtener todos los programas del servicio
    this.programas = this.programsService.getPrograms();
    this.filteredPrograms = this.programas;
    
    // Obtener tipos de fondo únicos
    const tiposFondo = new Set<string>();
    this.programas.forEach(programa => {
      if (programa.tipoFondo) {
        tiposFondo.add(programa.tipoFondo);
      }
    });
    this.tipoFondoOptions = Array.from(tiposFondo)
      .sort()
      .map(tipo => ({ label: tipo, value: tipo }));
  }

  filterPrograms(): void {
    let filtered = [...this.programas];

    // Filtro por texto
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(programa => {
        const titulo = programa.titulo?.toLowerCase() || '';
        const descripcion = programa.descripcion?.toLowerCase() || '';
        const beneficiarios = programa.beneficiarios?.toLowerCase() || '';
        
        return titulo.includes(term) || 
               descripcion.includes(term) || 
               beneficiarios.includes(term);
      });
    }

    // Filtro por estado
    if (this.selectedEstado) {
      filtered = filtered.filter(programa => programa.estado === this.selectedEstado);
    }

    // Filtro por tipo de fondo
    if (this.selectedTipoFondo) {
      filtered = filtered.filter(programa => programa.tipoFondo === this.selectedTipoFondo);
    }

    this.filteredPrograms = filtered;
  }

  onSearchClick(): void {
    // Navegar a la página de búsqueda con los parámetros actuales
    const queryParams: any = {};
    
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      queryParams.q = this.searchTerm.trim();
    }
    if (this.selectedEstado) {
      queryParams.estado = this.selectedEstado;
    }
    if (this.selectedTipoFondo) {
      queryParams.tipo = this.selectedTipoFondo;
    }
    
    // Navegar a la página de búsqueda
    this.router.navigate(['/buscar'], { queryParams });
  }
}
