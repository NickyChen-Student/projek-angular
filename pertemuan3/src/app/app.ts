import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight';
import { InitialsPipe } from './initials-pipe';
import { NamaCasePipe } from './nama-case-pipe';
import { RupiahPipe } from './rupiah-pipe';
import { TanggalPipe } from './tanggal-pipe';

@Component({
  selector: 'app-root',
  imports: [NgClass, NgStyle, FormsModule, HighlightDirective, InitialsPipe, NamaCasePipe, RupiahPipe, TanggalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isActive = signal(true);
  fontSize = signal(24);

  name = '';
  highlightColor = signal('#B2EBF2');
  user = { name: 'Nicky Chen'}

  inputNama = signal('');
  inputNominal = signal('');
  inputTanggal = signal('');
}