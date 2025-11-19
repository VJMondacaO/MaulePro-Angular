import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProgramDetailComponent } from './features/programs/program-detail/program-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: HomeComponent }, // TODO: Crear componente de búsqueda
  { path: 'preguntas-frecuentes', component: HomeComponent }, // TODO: Crear componente FAQ
  { path: 'programas/:id', component: ProgramDetailComponent },
];