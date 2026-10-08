import { Routes } from '@angular/router';
import { Menu1 } from './pages/menu1/menu1';
import { Menu2 } from './pages/menu2/menu2';
import { Menu3 } from './pages/menu3/menu3';
import { Menu4 } from './pages/menu4/menu4';

export const routes: Routes = [
  { path: '', redirectTo: 'menu1', pathMatch: 'full' },
  { path: 'menu1', component: Menu1 },
  { path: 'menu2', component: Menu2 },
  { path: 'menu3', component: Menu3 },
  { path: 'menu4', component: Menu4 },
  { path: 'menu4/:section', component: Menu4 },
  { path: '**', redirectTo: 'menu1' },
];
