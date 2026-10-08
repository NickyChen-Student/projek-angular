import { Routes } from '@angular/router';
import { TelephonePage } from './pages/telephone-page';
import { TodosPage } from './pages/todos-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'telephone' },
  { path: 'telephone', component: TelephonePage },
  { path: 'todos', component: TodosPage },
  { path: '**', redirectTo: 'telephone' },
];
