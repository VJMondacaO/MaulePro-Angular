import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeterGroupModule } from 'primeng/metergroup';
import { ButtonModule } from 'primeng/button';

interface MeterItem {
    label: string;
    value: number;
    color: string;
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, MeterGroupModule, RouterModule, ButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="min-h-screen bg-surface-100 dark:bg-surface-950 py-8 lg:py-12">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <!-- Botón Volver -->
                <div class="mb-6">
                    <button 
                        pButton 
                        type="button"
                        label="Volver" 
                        icon="pi pi-chevron-left"
                        iconPos="left"
                        class="rounded-full p-button-outlined p-button-secondary"
                        [routerLink]="['/home']">
                    </button>
                </div>
                
                <!-- Hero Section -->
                <section class="bg-gradient-to-br from-[#003B8D] to-[#0066CC] text-white rounded-lg shadow-lg mb-8 lg:mb-12 p-6 lg:p-12">
                    <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                        Panel de Información
                    </h1>
                    <p class="text-lg lg:text-xl text-white/95 leading-relaxed w-full">
                        Resumen de proyectos y ejecución presupuestaria
                    </p>
                </section>

                <!-- Contenido Principal -->
                <div class="flex gap-4 flex-col w-full">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
                        <div class="p-4 bg-cyan-50 dark:bg-cyan-400/30 rounded-2xl border border-cyan-200 dark:border-cyan-400/20 flex flex-col gap-4">
                            <div class="flex justify-between items-start">
                                <div class="flex justify-center items-center h-8 w-8 bg-cyan-500 dark:bg-cyan-600 rounded-lg">
                                    <i class="pi pi-dollar text-surface-0 text-base! leading-none!"></i>
                                </div>
                                <span class="text-cyan-700 dark:text-cyan-300 text-sm font-medium leading-tight">2025</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="text-cyan-700 dark:text-cyan-300 font-normal leading-tight">Presupuesto de Inversión</span>
                                <div class="text-cyan-900 dark:text-cyan-100 font-medium text-2xl! leading-tight!">119.000 M</div>
                            </div>
                        </div>

                        <div class="p-4 bg-orange-50 dark:bg-orange-400/30 rounded-2xl border border-orange-200 dark:border-orange-400/20 flex flex-col gap-4">
                            <div class="flex justify-between items-start">
                                <div class="flex justify-center items-center h-8 w-8 bg-orange-500 dark:bg-orange-600 rounded-lg">
                                    <i class="pi pi-users text-surface-0 text-base! leading-none!"></i>
                                </div>
                                <span class="text-orange-700 dark:text-orange-300 text-sm font-medium leading-tight">2025</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="text-orange-700 dark:text-orange-300 font-normal leading-tight">Personas Beneficiadas</span>
                                <div class="text-orange-900 dark:text-orange-100 font-medium text-2xl! leading-tight!">45,230</div>
                            </div>
                        </div>

                        <div class="p-4 bg-slate-50 dark:bg-slate-400/30 rounded-2xl border border-slate-200 dark:border-slate-400/20 flex flex-col gap-4">
                            <div class="flex justify-between items-start">
                                <div class="flex justify-center items-center h-8 w-8 bg-slate-500 dark:bg-slate-600 rounded-lg">
                                    <i class="pi pi-briefcase text-surface-0 text-base! leading-none!"></i>
                                </div>
                                <span class="text-slate-700 dark:text-slate-300 text-sm font-medium leading-tight">2025</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="text-slate-700 dark:text-slate-300 font-normal leading-tight">Proyectos Realizados</span>
                                <div class="text-slate-900 dark:text-slate-100 font-medium text-2xl! leading-tight!">187</div>
                            </div>
                        </div>

                        <div class="p-4 bg-violet-50 dark:bg-violet-400/30 rounded-2xl border border-violet-200 dark:border-violet-400/20 flex flex-col gap-4">
                            <div class="flex justify-between items-start">
                                <div class="flex justify-center items-center h-8 w-8 bg-violet-500 dark:bg-violet-600 rounded-lg">
                                    <i class="pi pi-chart-line text-surface-0 text-base! leading-none!"></i>
                                </div>
                                <span class="text-violet-700 dark:text-violet-300 text-sm font-medium leading-tight">2025</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="text-violet-700 dark:text-violet-300 font-normal leading-tight">Porcentaje de Aceptación</span>
                                <div class="text-violet-900 dark:text-violet-100 font-medium text-2xl! leading-tight!">78%</div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
                        <div class="bg-surface-0 dark:bg-surface-900 shadow-sm rounded-2xl p-6 flex flex-col gap-4">
                            <span class="text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight">Ejecución del Presupuesto</span>

                            <div class="flex flex-col gap-3">
                                <div class="flex justify-between md:items-center md:flex-row flex-col">
                                    <span class="text-surface-900 dark:text-surface-0 text-4xl font-semibold leading-tight">73.8%</span>
                                    <span class="text-surface-700 dark:text-surface-300 leading-tight">87.822 M / 119.000 M</span>
                                </div>

                                <p-metergroup [value]="meterItems">
                                    <ng-template #label></ng-template>
                                    <ng-template #meter let-value let-class="class" let-width="size">
                                        <span [class]="class" [style]="{ background: value.color, width: value.value + '%' }"></span>
                                    </ng-template>
                                </p-metergroup>
                            </div>

                            <div class="flex flex-col gap-3">
                                <span class="text-surface-900 dark:text-surface-0 font-semibold leading-tight">Áreas de Inversión</span>

                                <div class="flex flex-col gap-3">
                                    <div class="flex items-center gap-4">
                                        <span class="w-4 h-4 bg-cyan-500 rounded-full"></span>
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 font-normal leading-tight">Salud</span>
                                        <span class="text-surface-700 dark:text-surface-300 leading-tight">23.5%</span>
                                    </div>

                                    <div class="flex items-center gap-4">
                                        <span class="w-4 h-4 bg-amber-500 rounded-full"></span>
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 font-normal leading-tight">Infraestructura Vial</span>
                                        <span class="text-surface-700 dark:text-surface-300 leading-tight">19.1%</span>
                                    </div>

                                    <div class="flex items-center gap-4">
                                        <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 font-normal leading-tight">Fomento Productivo</span>
                                        <span class="text-surface-700 dark:text-surface-300 leading-tight">12.4%</span>
                                    </div>

                                    <div class="flex items-center gap-4">
                                        <span class="w-4 h-4 bg-pink-500 rounded-full"></span>
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 font-normal leading-tight">Deportes</span>
                                        <span class="text-surface-700 dark:text-surface-300 leading-tight">8.6%</span>
                                    </div>

                                    <div class="flex items-center gap-4">
                                        <span class="w-4 h-4 bg-orange-500 rounded-full"></span>
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 font-normal leading-tight">Cultura</span>
                                        <span class="text-surface-700 dark:text-surface-300 leading-tight">6.6%</span>
                                    </div>

                                    <div class="flex items-center gap-4">
                                        <span class="w-4 h-4 bg-slate-500 rounded-full"></span>
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 font-normal leading-tight">Otros</span>
                                        <span class="text-surface-700 dark:text-surface-300 leading-tight">3.6%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shadow bg-surface-0 dark:bg-surface-900 rounded-2xl p-6">
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-medium text-surface-900 dark:text-surface-0">Total de Proyectos</span>
                            </div>
                            <div class="mt-4">
                                <div class="flex flex-col gap-3">
                                    <div class="overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200 cursor-pointer">
                                        <div class="flex items-stretch">
                                            <div class="bg-primary flex items-center justify-center px-4 border-r border-primary">
                                                <i class="pi pi-map text-surface-0 text-base! leading-none!"></i>
                                            </div>
                                            <div class="flex flex-1 items-center justify-between p-4">
                                                <div class="flex flex-col gap-2">
                                                    <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Región del Maule</div>
                                                    <div class="text-base text-surface-900 dark:text-surface-0">187 Proyectos</div>
                                                </div>
                                                <div class="flex gap-4 items-center">
                                                    <div class="hidden md:flex">
                                                        <img src="assets/images/logosprovincias/Region_del_Maule.svg.png" alt="Región del Maule" class="h-12 w-12 object-contain" />
                                                    </div>
                                                    <i class="pi pi-chevron-right text-xs! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div
                                            class="overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200 cursor-pointer"
                                        >
                                            <div class="flex items-stretch">
                                                <div class="bg-surface-100 dark:bg-surface-800 flex items-center justify-center border-r border-surface-200 dark:border-surface-700 px-4">
                                                    <i class="pi pi-map-marker text-base! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                                <div class="flex flex-1 items-center justify-between p-4">
                                                    <div class="flex flex-col gap-2">
                                                        <div class="text-base text-surface-700 dark:text-surface-300">Provincia de</div>
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Talca</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">68 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden md:flex">
                                                            <img src="assets/images/logosprovincias/Provincia_de_Talca.svg.png" alt="Provincia Talca" class="h-12 w-12 object-contain" />
                                                        </div>
                                                        <i class="pi pi-chevron-right text-xs! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200 cursor-pointer"
                                        >
                                            <div class="flex items-stretch">
                                                <div class="bg-surface-100 dark:bg-surface-800 flex items-center justify-center border-r border-surface-200 dark:border-surface-700 px-4">
                                                    <i class="pi pi-map-marker text-base! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                                <div class="flex flex-1 items-center justify-between p-4">
                                                    <div class="flex flex-col gap-2">
                                                        <div class="text-base text-surface-700 dark:text-surface-300">Provincia de</div>
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Curicó</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">52 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden md:flex">
                                                            <img src="assets/images/logosprovincias/Provincia_de_Curicó.svg.png" alt="Provincia Curicó" class="h-12 w-12 object-contain" />
                                                        </div>
                                                        <i class="pi pi-chevron-right text-xs! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200 cursor-pointer"
                                        >
                                            <div class="flex items-stretch">
                                                <div class="bg-surface-100 dark:bg-surface-800 flex items-center justify-center border-r border-surface-200 dark:border-surface-700 px-4">
                                                    <i class="pi pi-map-marker text-base! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                                <div class="flex flex-1 items-center justify-between p-4">
                                                    <div class="flex flex-col gap-2">
                                                        <div class="text-base text-surface-700 dark:text-surface-300">Provincia de</div>
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Linares</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">43 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden md:flex">
                                                            <img src="assets/images/logosprovincias/Provincia_de_Linares.svg.png" alt="Provincia Linares" class="h-12 w-12 object-contain" />
                                                        </div>
                                                        <i class="pi pi-chevron-right text-xs! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200 cursor-pointer"
                                        >
                                            <div class="flex items-stretch">
                                                <div class="bg-surface-100 dark:bg-surface-800 flex items-center justify-center border-r border-surface-200 dark:border-surface-700 px-4">
                                                    <i class="pi pi-map-marker text-base! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                                <div class="flex flex-1 items-center justify-between p-4">
                                                    <div class="flex flex-col gap-2">
                                                        <div class="text-base text-surface-700 dark:text-surface-300">Provincia de</div>
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Cauquenes</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">24 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden md:flex">
                                                            <img src="assets/images/logosprovincias/Provincia_de_Cauquenes.svg.png" alt="Provincia Cauquenes" class="h-12 w-12 object-contain" />
                                                        </div>
                                                        <i class="pi pi-chevron-right text-xs! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sección de Estado de Proyectos -->
                    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20 rounded-2xl">
                        <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-0 mb-6">Estado de Proyectos</h2>
                        <div class="flex flex-col md:flex-row gap-6 justify-center items-center max-w-7xl mx-auto">
                            <!-- Proyectos Aprobados -->
                            <div class="group relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-2xl overflow-hidden flex-1 max-w-md">
                                <div class="absolute top-0 right-0 w-32 h-32 bg-green-200/20 dark:bg-green-800/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div class="relative flex flex-col gap-4 items-center justify-center text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="text-sm font-semibold text-green-700 dark:text-green-300 uppercase tracking-wide mb-2">Aprobados</div>
                                        <div class="text-4xl font-bold text-green-900 dark:text-green-100 mb-1">145</div>
                                        <div class="text-base text-green-600 dark:text-green-400 font-medium">Proyectos</div>
                                    </div>
                                    <div class="flex items-center justify-center gap-2 pt-2 border-t border-green-200 dark:border-green-800 w-full">
                                        <span class="text-sm text-green-700 dark:text-green-300 font-medium">77.5% del total</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Proyectos en Revisión -->
                            <div class="group relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-2xl overflow-hidden flex-1 max-w-md">
                                <div class="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 dark:bg-amber-800/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div class="relative flex flex-col gap-4 items-center justify-center text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="text-sm font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide mb-2">En Revisión</div>
                                        <div class="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-1">28</div>
                                        <div class="text-base text-amber-600 dark:text-amber-400 font-medium">Proyectos</div>
                                    </div>
                                    <div class="flex items-center justify-center gap-2 pt-2 border-t border-amber-200 dark:border-amber-800 w-full">
                                        <span class="text-sm text-amber-700 dark:text-amber-300 font-medium">15.0% del total</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Proyectos Rechazados -->
                            <div class="group relative bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-2 border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-2xl overflow-hidden flex-1 max-w-md">
                                <div class="absolute top-0 right-0 w-32 h-32 bg-red-200/20 dark:bg-red-800/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div class="relative flex flex-col gap-4 items-center justify-center text-center">
                                    <div class="flex flex-col items-center">
                                        <div class="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide mb-2">Rechazados</div>
                                        <div class="text-4xl font-bold text-red-900 dark:text-red-100 mb-1">14</div>
                                        <div class="text-base text-red-600 dark:text-red-400 font-medium">Proyectos</div>
                                    </div>
                                    <div class="flex items-center justify-center gap-2 pt-2 border-t border-red-200 dark:border-red-800 w-full">
                                        <span class="text-sm text-red-700 dark:text-red-300 font-medium">7.5% del total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class DashboardComponent {
    meterItems: MeterItem[] = [
        {
            label: 'Salud',
            value: 23.5,
            color: 'var(--p-cyan-500)'
        },
        {
            label: 'Infraestructura Vial',
            value: 19.1,
            color: 'var(--p-amber-500)'
        },
        {
            label: 'Fomento Productivo',
            value: 12.4,
            color: 'var(--p-green-500)'
        },
        {
            label: 'Deportes',
            value: 8.6,
            color: 'var(--p-pink-500)'
        },
        {
            label: 'Cultura',
            value: 6.6,
            color: 'var(--p-orange-500)'
        },
        {
            label: 'Otros',
            value: 3.6,
            color: 'var(--p-slate-500)'
        }
    ];
}

