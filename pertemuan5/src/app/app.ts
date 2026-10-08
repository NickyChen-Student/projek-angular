import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
