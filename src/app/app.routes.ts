import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SearchComponent } from './features/search/search.component';
import { NosotrosComponent } from './features/nosotros/nosotros.component';
import { ProgramDetailComponent } from './features/programs/components/program-detail/program-detail.component';
import { FaqComponent } from './features/faq/faq.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'preguntas-frecuentes', component: FaqComponent },
  { path: 'programas/:id', component: ProgramDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];