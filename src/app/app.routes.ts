import { Routes } from '@angular/router';
import { Listado } from '../medicamentos/listado/listado';
import { Home } from '../home/home';

export const routes: Routes = [
  { path: 'medicamentos', component: Listado },
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
