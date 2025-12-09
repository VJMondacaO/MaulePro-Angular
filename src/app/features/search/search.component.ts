import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, signal, computed } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  programas = signal<ProgramCardData[]>([]);
  searchTerm = signal<string>('');
  selectedEstado = signal<string | null>(null);
  selectedTipoFondo = signal<string | null>(null);

  estadoOptions = [
    { label: 'Abierto', value: 'open' },
    { label: 'Próximamente', value: 'soon' },
    { label: 'Cerrado', value: 'closed' }
  ];

  tipoFondoOptions = computed(() => {
    const tipos = new Set<string>();
    this.programas().forEach(p => {
      if (p.tipoFondo) tipos.add(p.tipoFondo);
    });
    return Array.from(tipos).sort().map(t => ({ label: t, value: t }));
  });

  filteredPrograms = computed(() => {
    let filtered = [...this.programas()];
    const term = this.searchTerm().toLowerCase().trim();
    const estado = this.selectedEstado();
    const tipo = this.selectedTipoFondo();

    if (term) {
      filtered = filtered.filter(p => {
        const titulo = p.titulo?.toLowerCase() || '';
        const descripcion = p.descripcion?.toLowerCase() || '';
        const beneficiarios = p.beneficiarios?.toLowerCase() || '';
        return titulo.includes(term) || descripcion.includes(term) || beneficiarios.includes(term);
      });
    }

    if (estado) {
      filtered = filtered.filter(p => this.getEstadoReal(p) === estado);
    }

    if (tipo) {
      filtered = filtered.filter(p => p.tipoFondo === tipo);
    }

    return filtered;
  });

  constructor(
    private programsService: ProgramsService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.loadPrograms();
  }

  private loadPrograms() {
    this.programsService.getPrograms().subscribe(data => {
      this.programas.set(data);
      // Signals handle reactivity, but markForCheck is safe for async data in OnPush
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm.set(params['q']);
      }
      if (params['estado']) {
        this.selectedEstado.set(params['estado']);
      }
      if (params['tipo']) {
        this.selectedTipoFondo.set(params['tipo']);
      }
    });
  }

  getEstadoReal(programa: ProgramCardData): 'open' | 'soon' | 'closed' {
    return getEstadoReal(programa);
  }

  onSearchClick(): void {
    const queryParams: { [key: string]: string } = {};
    const term = this.searchTerm();
    const estado = this.selectedEstado();
    const tipo = this.selectedTipoFondo();

    if (term && term.trim() !== '') {
      queryParams['q'] = term.trim();
    }
    if (estado) {
      queryParams['estado'] = estado;
    }
    if (tipo) {
      queryParams['tipo'] = tipo;
    }

    this.router.navigate(['/buscar'], { queryParams });
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedEstado.set(null);
    this.selectedTipoFondo.set(null);
    this.router.navigate(['/buscar']);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}

