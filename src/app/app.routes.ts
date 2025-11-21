import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProgramDetailComponent } from './features/programs/program-detail/program-detail.component';
import { FaqComponent } from './features/faq/faq.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: HomeComponent }, // TODO: Crear componente de búsqueda
  { path: 'preguntas-frecuentes', component: FaqComponent },
  { path: 'programas/:id', component: ProgramDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];