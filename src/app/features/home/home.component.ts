import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ProgramCardData } from '../programs/components/models/program-card.types';
import { ProgramsService } from '../programs/components/services/programs.service';
import { ProgramCardComponent } from '../programs/components/program-card/program-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { getEstadoReal } from '../programs/components/utils/program.utils';

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
      title: 'Paso 1: Revisa las Bases',
      description: 'Lee los requisitos del fondo, verifica la eligibilidad de tu institución y los plazos de postulación.'
    },
    {
      icon: 'pi pi-pencil',
      title: 'Paso 2: Diseña tu Proyecto',
      description: 'Define objetivo, beneficiarios, actividades y presupuesto según el formato solicitado.'
    },
    {
      icon: 'pi pi-upload',
      title: 'Paso 3: Sube tu Postulación',
      description: 'Completa el formulario en línea y adjunta toda la documentación requerida antes del cierre.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Paso 4: Haz Seguimiento',
      description: 'Revisa el estado de tu proyecto, responde observaciones y consulta los resultados de la evaluación.'
    }
  ];


  constructor(
    private programsService: ProgramsService,
    private router: Router
  ) {
    this.programas = this.programsService.getPrograms();
    this.programas = this.ordenarProgramasPorEstado(this.programas);
    this.filteredPrograms = this.programas;
    
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

  getEstadoReal(programa: ProgramCardData): 'open' | 'soon' | 'closed' {
    return getEstadoReal(programa);
  }

  ordenarProgramasPorEstado(programas: ProgramCardData[]): ProgramCardData[] {
    const ordenEstado = { 'open': 1, 'soon': 2, 'closed': 3 };
    
    return [...programas].sort((a, b) => {
      const estadoA = this.getEstadoReal(a);
      const estadoB = this.getEstadoReal(b);
      
      const ordenA = ordenEstado[estadoA] || 4;
      const ordenB = ordenEstado[estadoB] || 4;
      
      if (ordenA === ordenB) {
        return 0;
      }
      
      return ordenA - ordenB;
    });
  }

  filterPrograms(): void {
    let filtered = [...this.programas];

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

    if (this.selectedEstado) {
      filtered = filtered.filter(programa => this.getEstadoReal(programa) === this.selectedEstado);
    }

    if (this.selectedTipoFondo) {
      filtered = filtered.filter(programa => programa.tipoFondo === this.selectedTipoFondo);
    }

    filtered = this.ordenarProgramasPorEstado(filtered);

    this.filteredPrograms = filtered;
  }

  onSearchClick(): void {
    const queryParams: { [key: string]: string } = {};
    
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      queryParams['q'] = this.searchTerm.trim();
    }
    if (this.selectedEstado) {
      queryParams['estado'] = this.selectedEstado;
    }
    if (this.selectedTipoFondo) {
      queryParams['tipo'] = this.selectedTipoFondo;
    }
    
    this.router.navigate(['/buscar'], { queryParams });
  }
}
