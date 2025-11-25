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
import { getEstadoReal } from '../programs/components/utils/program.utils';

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
    this.programas = this.programsService.getPrograms();
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

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
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

  getEstadoReal(programa: ProgramCardData): 'open' | 'soon' | 'closed' {
    return getEstadoReal(programa);
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

    this.filteredPrograms = filtered;
  }

  onSearchClick(): void {
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

