import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-a',
  imports: [],
  templateUrl: './menu-a.html',
  styleUrl: './menu-a.css',
})
export class MenuA {
  protected readonly penjualan = [
    { brand: 'Seiko', unit: 30 },
    { brand: 'Tissot', unit: 15 },
    { brand: 'Casio', unit: 12 },
    { brand: 'Orient', unit: 9 },
    { brand: 'Citizen', unit: 8 },
    { brand: 'Omega', unit: 5 },
    { brand: 'Tudor', unit: 3 },
    { brand: 'Rolex', unit: 3 },
  ];

  private readonly max = Math.max(...this.penjualan.map((item) => item.unit));

  protected width(unit: number): number {
    return Math.round((unit / this.max) * 100);
  }
}
