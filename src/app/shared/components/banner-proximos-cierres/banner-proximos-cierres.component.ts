import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProgramsService } from '../../../features/programs/components/services/programs.service';
import { ProgramCardData } from '../../../features/programs/components/models/program-card.types';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-banner-proximos-cierres',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './banner-proximos-cierres.component.html',
    styleUrl: './banner-proximos-cierres.component.css'
})
export class BannerProximosCierresComponent implements OnInit, OnDestroy {
    proyectos: ProgramCardData[] = [];
    proyectoActual: number = 0;
    intervalo: any;
    bannerCerrado: boolean = false;

    constructor(
        private programsService: ProgramsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // Verificar si el banner fue cerrado previamente
        const cerrado = localStorage.getItem('bannerProximosCierresCerrado');
        if (cerrado === 'true') {
            this.bannerCerrado = true;
            return;
        }
        
        this.cargarProyectosProximosACerrar();
        
        // Iniciar carrusel si hay proyectos
        if (this.proyectos.length > 0) {
            this.iniciarCarrusel();
        }
    }

    ngOnDestroy(): void {
        this.detenerCarrusel();
    }

    cargarProyectosProximosACerrar(): void {
        const todosLosProgramas = this.programsService.getPrograms();
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        // Primero intentar filtrar proyectos próximos a cerrar (próximos 90 días)
        let proyectosFiltrados = todosLosProgramas
            .filter(programa => {
                if (programa.estado !== 'open' || !programa.fechaCierre) {
                    return false;
                }
                
                try {
                    const fechaCierre = new Date(programa.fechaCierre);
                    if (isNaN(fechaCierre.getTime())) {
                        return false;
                    }
                    
                    fechaCierre.setHours(0, 0, 0, 0);
                    const diasRestantes = Math.ceil((fechaCierre.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
                    
                    // Mostrar proyectos que cierren en los próximos 90 días
                    return diasRestantes >= 0 && diasRestantes <= 90;
                } catch (error) {
                    console.error('Error al procesar fecha de cierre:', programa.fechaCierre, error);
                    return false;
                }
            })
            .sort((a, b) => {
                try {
                    // Ordenar por fecha de cierre (más próximos primero)
                    if (!a.fechaCierre || !b.fechaCierre) {
                        return 0;
                    }
                    const fechaA = new Date(a.fechaCierre);
                    const fechaB = new Date(b.fechaCierre);
                    return fechaA.getTime() - fechaB.getTime();
                } catch {
                    return 0;
                }
            });
        
        // Si no hay proyectos próximos a cerrar, mostrar todos los proyectos abiertos
        if (proyectosFiltrados.length === 0) {
            proyectosFiltrados = todosLosProgramas
                .filter(programa => programa.estado === 'open')
                .slice(0, 3);
        }
        
        this.proyectos = proyectosFiltrados.slice(0, 3); // Tomar solo los 3 más próximos
        
        console.log('Proyectos encontrados para el banner:', this.proyectos.length);
        console.log('Proyectos:', this.proyectos);
        console.log('Fecha actual:', hoy.toISOString().split('T')[0]);
    }

    iniciarCarrusel(): void {
        if (this.proyectos.length <= 1) {
            return;
        }
        
        this.intervalo = setInterval(() => {
            this.siguienteProyecto();
        }, 5000); // Cambiar cada 5 segundos
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
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const fecha = new Date(fechaCierre);
        fecha.setHours(0, 0, 0, 0);
        const dias = Math.ceil((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
        return dias >= 0 ? dias : 0;
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
            console.log('Banner cerrado por usuario');
            return false;
        }
        // Verificar si el usuario cerró el banner en esta sesión
        const cerrado = localStorage.getItem('bannerProximosCierresCerrado');
        if (cerrado === 'true') {
            this.bannerCerrado = true;
            console.log('Banner cerrado en localStorage');
            return false;
        }
        const debeMostrar = this.proyectos.length > 0;
        console.log('¿Debe mostrar banner?', debeMostrar, 'Proyectos:', this.proyectos.length, 'Banner cerrado:', this.bannerCerrado);
        return debeMostrar;
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

