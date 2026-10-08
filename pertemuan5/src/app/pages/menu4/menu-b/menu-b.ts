import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-b',
  imports: [],
  templateUrl: './menu-b.html',
  styleUrl: './menu-b.css',
})
export class MenuB {
  protected readonly stokMenipis = [
    { model: 'Casio G-Shock GA-2100', brand: 'Casio', sisa: 0 },
    { model: 'Hamilton Khaki Field H70455533', brand: 'Hamilton', sisa: 0 },
    { model: 'Rolex Submariner Date 126610LN', brand: 'Rolex', sisa: 2 },
    { model: 'Tudor Black Bay 58 79030N', brand: 'Tudor', sisa: 3 },
    { model: 'Omega Speedmaster Professional', brand: 'Omega', sisa: 4 },
  ];

  protected badgeClass(sisa: number): string {
    return sisa === 0 ? 'badge danger' : 'badge warning';
  }

  protected label(sisa: number): string {
    return sisa === 0 ? 'Habis' : `Sisa ${sisa}`;
  }
}
