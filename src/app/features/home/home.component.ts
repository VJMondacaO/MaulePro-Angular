import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, signal, computed } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
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

    return this.ordenarProgramasPorEstado(filtered);
  });

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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.programsService.getPrograms().subscribe(data => {
      this.programas.set(data);
      // No need to call markForCheck explicitly for signals if used in template, 
      // but since we are in OnPush and might have some async timing, it's safe to keep it or rely on signal updates.
      // Signals usually trigger CD in OnPush components.
    });
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
}
