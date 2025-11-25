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
    // Ordenar programas: abiertos primero, luego próximos, luego cerrados
    this.programas = this.ordenarProgramasPorEstado(this.programas);
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

  /**
   * Obtiene el estado real de un programa, verificando si el plazo ya cumplió
   */
  getEstadoReal(programa: ProgramCardData): 'open' | 'soon' | 'closed' {
    // Si el estado es 'open' y tiene fechaCierre, verificar si ya pasó
    if (programa.estado === 'open' && programa.fechaCierre) {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      
      const [year, month, day] = programa.fechaCierre.split('-').map(Number);
      const fechaCierre = new Date(year, month - 1, day);
      fechaCierre.setHours(0, 0, 0, 0);
      
      // Si la fecha de cierre ya pasó, cambiar a 'closed'
      if (fechaCierre.getTime() < hoy.getTime()) {
        return 'closed';
      }
    }
    
    return programa.estado;
  }

  /**
   * Ordena los programas: abiertos primero, luego próximos, luego cerrados
   */
  ordenarProgramasPorEstado(programas: ProgramCardData[]): ProgramCardData[] {
    const ordenEstado = { 'open': 1, 'soon': 2, 'closed': 3 };
    
    return [...programas].sort((a, b) => {
      const estadoA = this.getEstadoReal(a);
      const estadoB = this.getEstadoReal(b);
      
      const ordenA = ordenEstado[estadoA] || 4;
      const ordenB = ordenEstado[estadoB] || 4;
      
      // Si tienen el mismo estado, mantener el orden original
      if (ordenA === ordenB) {
        return 0;
      }
      
      return ordenA - ordenB;
    });
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

    // Filtro por estado (usando estado real)
    if (this.selectedEstado) {
      filtered = filtered.filter(programa => this.getEstadoReal(programa) === this.selectedEstado);
    }

    // Filtro por tipo de fondo
    if (this.selectedTipoFondo) {
      filtered = filtered.filter(programa => programa.tipoFondo === this.selectedTipoFondo);
    }

    // Ordenar resultados: abiertos primero, luego próximos, luego cerrados
    filtered = this.ordenarProgramasPorEstado(filtered);

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
