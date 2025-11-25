import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeterGroupModule } from 'primeng/metergroup';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, MeterGroupModule, RouterModule, ButtonModule],
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

                    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-6 md:px-12 lg:px-20">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-4 rounded-2xl flex items-center gap-4">
                                <div class="flex-1 flex flex-col gap-2">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">145</span>
                                        <div class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Proyectos Aprobados</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <i class="pi pi-check-circle text-5xl text-green-600 dark:text-green-400"></i>
                                </div>
                            </div>

                            <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-4 rounded-2xl flex items-center gap-4">
                                <div class="flex-1 flex flex-col gap-2">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">28</span>
                                        <div class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Proyectos en Revisión</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                                    <i class="pi pi-clock text-5xl text-amber-600 dark:text-amber-400"></i>
                                </div>
                            </div>

                            <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-4 rounded-2xl flex items-center gap-4">
                                <div class="flex-1 flex flex-col gap-2">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">14</span>
                                        <div class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Proyectos Rechazados</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full">
                                    <i class="pi pi-times-circle text-5xl text-red-600 dark:text-red-400"></i>
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
    meterItems: any[] = [
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

