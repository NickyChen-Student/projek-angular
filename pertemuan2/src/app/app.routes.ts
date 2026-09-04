import { Routes } from '@angular/router';
import { BMW } from './bmw/bmw';
import { ContactUS } from './contact-us/contact-us';
import { McLaren } from './mc-laren/mc-laren';
import { Mercedez } from './mercedez/mercedez';
import { Porsche } from './porsche/porsche';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const routes: Routes = [
  {
    path: '',
    component: BMW,
  },
  {
    path: 'contact',
    component: ContactUS,
  },
  {
    path: 'mclaren',
    component: McLaren,
  },
  {
    path: 'mercedez',
    component: Mercedez,
  },
  {
    path: 'porsche',
    component: Porsche,
  },
  {
    path: 'header',
    component: Header,
  },
  {
    path: 'footer',
    component: Footer,
  },
];
