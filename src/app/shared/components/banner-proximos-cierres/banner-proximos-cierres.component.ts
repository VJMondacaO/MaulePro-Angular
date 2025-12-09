import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProgramsService } from '../../../features/programs/components/services/programs.service';
import { ProgramCardData } from '../../../features/programs/components/models/program-card.types';
import { ButtonModule } from 'primeng/button';
import { getEstadoReal, parseFechaCierre, getDiasRestantes } from '../../../features/programs/components/utils/program.utils';

@Component({
    selector: 'app-banner-proximos-cierres',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './banner-proximos-cierres.component.html',
    styleUrl: './banner-proximos-cierres.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerProximosCierresComponent implements OnInit, OnDestroy {
    proyectos: ProgramCardData[] = [];
    proyectoActual: number = 0;
    intervalo: ReturnType<typeof setInterval> | null = null;
    bannerCerrado: boolean = false;

    constructor(
        private programsService: ProgramsService,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        const cerrado = localStorage.getItem('bannerProximosCierresCerrado');
        if (cerrado === 'true') {
            this.bannerCerrado = true;
            return;
        }

        this.cargarProyectosProximosACerrar();
    }

    ngOnDestroy(): void {
        this.detenerCarrusel();
    }

    getEstadoReal(programa: ProgramCardData): 'open' | 'soon' | 'closed' {
        return getEstadoReal(programa);
    }

    cargarProyectosProximosACerrar(): void {
        this.programsService.getPrograms().subscribe(todosLosProgramas => {
            let proyectosFiltrados = todosLosProgramas
                .filter(programa => {
                    const estadoReal = this.getEstadoReal(programa);
                    if (estadoReal !== 'open' || !programa.fechaCierre) {
                        return false;
                    }

                    const diasRestantes = getDiasRestantes(programa.fechaCierre);

                    return diasRestantes !== null && diasRestantes >= 0 && diasRestantes <= 90;
                })
                .sort((a, b) => {
                    if (!a.fechaCierre || !b.fechaCierre) {
                        return 0;
                    }

                    const fechaA = parseFechaCierre(a.fechaCierre);
                    const fechaB = parseFechaCierre(b.fechaCierre);

                    if (!fechaA || !fechaB) {
                        return 0;
                    }

                    return fechaA.getTime() - fechaB.getTime();
                });

            if (proyectosFiltrados.length === 0) {
                proyectosFiltrados = todosLosProgramas
                    .filter(programa => this.getEstadoReal(programa) === 'open')
                    .slice(0, 3);
            }

            this.proyectos = proyectosFiltrados.slice(0, 3);

            if (this.proyectos.length > 0) {
                this.iniciarCarrusel();
            }

            this.cdr.markForCheck();
        });
    }

    iniciarCarrusel(): void {
        if (this.proyectos.length <= 1) {
            return;
        }

        this.intervalo = setInterval(() => {
            this.siguienteProyecto();
        }, 5000);
    }

    detenerCarrusel(): void {
        if (this.intervalo) {
            clearInterval(this.intervalo);
        }
    }

    siguienteProyecto(): void {
        this.proyectoActual = (this.proyectoActual + 1) % this.proyectos.length;
    }

    proyectoAnterior(): void {
        this.detenerCarrusel();
        this.proyectoActual = (this.proyectoActual - 1 + this.proyectos.length) % this.proyectos.length;
        this.iniciarCarrusel();
    }

    irAlSiguiente(): void {
        this.detenerCarrusel();
        this.siguienteProyecto();
        this.iniciarCarrusel();
    }

    obtenerDiasRestantes(fechaCierre: string): number {
        const dias = getDiasRestantes(fechaCierre);
        return dias !== null && dias >= 0 ? dias : 0;
    }

    cerrarBanner(): void {
        this.bannerCerrado = true;
        this.detenerCarrusel();
        // Guardar en localStorage para no mostrar el banner en esta sesión
        localStorage.setItem('bannerProximosCierresCerrado', 'true');
    }

    irADetalle(ruta: string | undefined): void {
        if (ruta) {
            this.router.navigate([ruta]);
        }
    }

    get mostrarBanner(): boolean {
        if (this.bannerCerrado) {
            return false;
        }
        // Verificar si el usuario cerró el banner en esta sesión
        const cerrado = localStorage.getItem('bannerProximosCierresCerrado');
        if (cerrado === 'true') {
            this.bannerCerrado = true;
            return false;
        }
        return this.proyectos.length > 0;
    }

    obtenerColorBanner(): string {
        if (this.proyectos.length === 0) {
            return 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)';
        }

        // Colores diferentes para cada proyecto
        const colores = [
            'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)', // Azul
            'linear-gradient(135deg, #0088FF 0%, #0066CC 100%)', // Azul claro
            'linear-gradient(135deg, #0052A3 0%, #003d7a 100%)', // Azul oscuro
        ];

        return colores[this.proyectoActual % colores.length];
    }
}

