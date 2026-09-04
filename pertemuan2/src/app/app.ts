import { Component, signal } from '@angular/core';
import { BMW } from './bmw/bmw';
import { ContactUS } from './contact-us/contact-us';
import { McLaren } from './mc-laren/mc-laren';
import { Mercedez } from './mercedez/mercedez';
import { Porsche } from './porsche/porsche';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [BMW, McLaren, Mercedez, Porsche, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
