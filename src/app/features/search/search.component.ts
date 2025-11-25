import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramCardData } from '../programs/components/models/program-card.types';
import { ProgramsService } from '../programs/components/services/programs.service';
import { ProgramCardComponent } from '../programs/components/program-card/program-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProgramCardComponent,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
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

  constructor(
    private programsService: ProgramsService,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit(): void {
    // Scroll al top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Cargar parámetros de búsqueda desde la URL
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm = params['q'];
      }
      if (params['estado']) {
        this.selectedEstado = params['estado'];
      }
      if (params['tipo']) {
        this.selectedTipoFondo = params['tipo'];
      }
      this.filterPrograms();
    });
  }

  /**
   * Obtiene el estado real del programa, verificando si el plazo ya cumplió
   * Similar a la lógica en program-card.component.ts
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

    // Filtro por estado - usar el estado real calculado
    if (this.selectedEstado) {
      filtered = filtered.filter(programa => this.getEstadoReal(programa) === this.selectedEstado);
    }

    // Filtro por tipo de fondo
    if (this.selectedTipoFondo) {
      filtered = filtered.filter(programa => programa.tipoFondo === this.selectedTipoFondo);
    }

    this.filteredPrograms = filtered;
  }

  onSearchClick(): void {
    // Actualizar la URL con los parámetros de búsqueda
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
    
    // Navegar con los nuevos parámetros
    this.router.navigate(['/buscar'], { queryParams });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedEstado = null;
    this.selectedTipoFondo = null;
    this.router.navigate(['/buscar']);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}

