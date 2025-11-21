import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    selector: 'narrow-sidebar',
    standalone: true,
    imports: [CommonModule, FormsModule, AvatarModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, MeterGroupModule, ProgressBarModule],
    template: `
        <div class="flex relative lg:static bg-surface-50 dark:bg-surface-950">
            <div class="p-6 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface-100 dark:border-surface-700 flex flex-col w-24">
                <div class="flex justify-center">
                    <img src="/images/logo-gore-negro.png" alt="Logo Gobierno Regional" class="h-16 w-16 object-contain" />
                </div>

                <div class="flex-1 flex flex-col items-center py-6">
                    <nav class="flex flex-col items-center gap-4">
                        @for (item of navs; track item.label; let index = $index) {
                            <button
                                [ngClass]="
                                    selectedNav() === item.label
                                        ? 'bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0 border-surface-200 dark:border-surface-700'
                                        : 'bg-transparent border-transparent text-surface-600 dark:text-surface-500'
                                "
                                class="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-surface-0 dark:hover:bg-surface-950 hover:text-surface-900 dark:hover:text-surface-0 hover:border-surface-200 dark:hover:border-surface-700 transition-all cursor-pointer"
                                (click)="selectedNav.set(item.label)"
                            >
                                <i [class]="item.icon" class="text-xl! leading-normal!"></i>
                            </button>
                        }
                    </nav>
                </div>

                <div class="flex flex-col items-center gap-4 mt-auto">
                    @for (item of bottomNavs; track item.label; let index = $index) {
                        <button
                            [ngClass]="
                                selectedNav() === item.label
                                    ? 'bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0 border-surface-200 dark:border-surface-700'
                                    : 'bg-transparent border-transparent text-surface-600 dark:text-surface-500'
                            "
                            class="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-surface-0 dark:hover:bg-surface-950 hover:text-surface-900 dark:hover:text-surface-0 hover:border-surface-200 dark:hover:border-surface-700 transition-all cursor-pointer"
                            (click)="selectedNav.set(item.label)"
                        >
                            <i [class]="item.icon" class="text-xl! leading-normal!"></i>
                        </button>
                    }

                    <div class="w-full h-px bg-surface-200 dark:bg-surface-700 my-4"></div>

                    <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/avatar-amyels.png" styleClass="w-10! h-10! cursor-pointer" shape="circle"></p-avatar>
                </div>
            </div>

            <div class="overflow-auto flex-1 flex flex-col gap-8 transition-all pb-20">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between py-6 px-8 gap-4 pb-0">
                    <div class="flex flex-col gap-1">
                        <h1 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">Dashboard</h1>
                        <p class="text-surface-500 leading-tight">Campaign Insights</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon class="pi pi-search"></p-inputicon>
                            <input pInputText [(ngModel)]="search" placeholder="Search" size="small" class="md:w-56 w-full" />
                        </p-iconfield>
                        <button pButton icon="pi pi-bell" severity="secondary" [outlined]="true" class="h-10! shrink-0">
                            <i pButtonIcon class="pi pi-bell"></i>
                        </button>
                    </div>
                </div>

                <hr class="border-t border-surface-200 dark:border-surface-700" />

                <div class="flex gap-8 flex-col px-8 w-full">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full">
                        <div class="p-4 bg-cyan-50 dark:bg-cyan-400/30 rounded-2xl border border-cyan-200 dark:border-cyan-400/20 flex flex-col gap-6">
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

                        <div class="p-4 bg-orange-50 dark:bg-orange-400/30 rounded-2xl border border-orange-200 dark:border-orange-400/20 flex flex-col gap-6">
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

                        <div class="p-4 bg-slate-50 dark:bg-slate-400/30 rounded-2xl border border-slate-200 dark:border-slate-400/20 flex flex-col gap-6">
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

                        <div class="p-4 bg-violet-50 dark:bg-violet-400/30 rounded-2xl border border-violet-200 dark:border-violet-400/20 flex flex-col gap-6">
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

                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 w-full">
                        <div class="bg-surface-0 dark:bg-surface-900 shadow-sm rounded-2xl p-8 flex flex-col gap-8">
                            <span class="text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight">Ejecución del Presupuesto</span>

                            <div class="flex flex-col gap-4">
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

                            <div class="flex flex-col gap-4">
                                <span class="text-surface-900 dark:text-surface-0 font-semibold leading-tight">Áreas de Inversión</span>

                                <div class="flex flex-col gap-4">
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
                        <div class="shadow bg-surface-0 dark:bg-surface-900 rounded-2xl p-8">
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-medium text-surface-900 dark:text-surface-0">Total de Proyectos</span>
                            </div>
                            <div class="mt-8">
                                <div class="flex flex-col gap-4">
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
                                                    <div class="hidden items-end gap-[3px] md:flex">
                                                        <div class="w-[6px] h-[22px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                        <div class="w-[6px] h-[14px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                        <div class="w-[6px] h-[19px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                        <div class="w-[6px] h-[19px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                        <div class="w-[6px] h-[17px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                        <div class="w-[6px] h-[24px] bg-primary rounded-[3.5px]"></div>
                                                    </div>
                                                    <i class="pi pi-chevron-right text-xs! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div
                                            class="overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200 cursor-pointer"
                                        >
                                            <div class="flex items-stretch">
                                                <div class="bg-surface-100 dark:bg-surface-800 flex items-center justify-center border-r border-surface-200 dark:border-surface-700 px-4">
                                                    <i class="pi pi-map-marker text-base! leading-tight! text-surface-900 dark:text-surface-0"></i>
                                                </div>
                                                <div class="flex flex-1 items-center justify-between p-4">
                                                    <div class="flex flex-col gap-2">
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Provincia Talca</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">68 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden items-end gap-[3px] md:flex">
                                                            <div class="w-[6px] h-[18px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[18px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[12px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[18px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[21px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[15px] bg-primary rounded-[3.5px]"></div>
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
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Provincia Curicó</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">52 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden items-end gap-[3px] md:flex">
                                                            <div class="w-[6px] h-[12px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[16px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[20px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[10px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[12px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[10px] bg-primary rounded-[3.5px]"></div>
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
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Provincia Linares</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">43 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden items-end gap-[3px] md:flex">
                                                            <div class="w-[6px] h-[17px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[9px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[14px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[12px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[14px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[21px] bg-primary rounded-[3.5px]"></div>
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
                                                        <div class="text-xl font-medium text-surface-900 dark:text-surface-0">Provincia Cauquenes</div>
                                                        <div class="text-base text-surface-700 dark:text-surface-200">24 Proyectos</div>
                                                    </div>
                                                    <div class="flex gap-4 items-center">
                                                        <div class="hidden items-end gap-[3px] md:flex">
                                                            <div class="w-[6px] h-[15px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[15px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[12px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[21px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[20px] bg-surface-200 dark:bg-surface-700 rounded-[3.5px]"></div>
                                                            <div class="w-[6px] h-[17px] bg-primary rounded-[3.5px]"></div>
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

                    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-4 rounded-2xl flex items-center gap-8">
                                <div class="flex-1 flex flex-col gap-4">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">145</span>
                                        <div class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Proyectos Aprobados</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <i class="pi pi-check-circle text-5xl text-green-600 dark:text-green-400"></i>
                                </div>
                            </div>

                            <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-4 rounded-2xl flex items-center gap-8">
                                <div class="flex-1 flex flex-col gap-4">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">28</span>
                                        <div class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Proyectos en Revisión</div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                                    <i class="pi pi-clock text-5xl text-amber-600 dark:text-amber-400"></i>
                                </div>
                            </div>

                            <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-4 rounded-2xl flex items-center gap-8">
                                <div class="flex-1 flex flex-col gap-4">
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
    `
})
export class NarrowSidebar {
    search: string = '';
    selectedNav = signal('Home');

    navs: any[] = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Bookmark', icon: 'pi pi-bookmark' },
        { label: 'Users', icon: 'pi pi-users' },
        { label: 'Comments', icon: 'pi pi-comments' },
        { label: 'Calendar', icon: 'pi pi-calendar' }
    ];

    bottomNavs: any[] = [
        { label: 'Question', icon: 'pi pi-question-circle' },
        { label: 'Settings', icon: 'pi pi-cog' }
    ];

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