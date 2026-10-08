import { Component } from '@angular/core';
import { formatRupiah } from '../../shared/format';

interface Produk {
  model: string;
  brand: string;
  harga: number;
  stok: number;
}

@Component({
  selector: 'app-menu2',
  imports: [],
  templateUrl: './menu2.html',
  styleUrl: './menu2.css',
})
export class Menu2 {
  protected readonly rupiah = formatRupiah;

  protected readonly produk: Produk[] = [
    { model: 'Seiko 5 Sports GMT SSK001', brand: 'Seiko', harga: 4500000, stok: 24 },
    { model: 'Rolex Submariner Date 126610LN', brand: 'Rolex', harga: 185000000, stok: 2 },
    { model: 'Tissot PRX Powermatic 80', brand: 'Tissot', harga: 8200000, stok: 15 },
    { model: 'Casio G-Shock GA-2100', brand: 'Casio', harga: 1750000, stok: 0 },
    { model: 'Omega Speedmaster Professional', brand: 'Omega', harga: 95000000, stok: 4 },
    { model: 'Seiko Prospex Sumo SPB103', brand: 'Seiko', harga: 7800000, stok: 8 },
    { model: 'Orient Kamasu RA-AA0001', brand: 'Orient', harga: 3200000, stok: 11 },
    { model: 'Tudor Black Bay 58 79030N', brand: 'Tudor', harga: 52000000, stok: 3 },
    { model: 'Citizen Promaster Eco-Drive', brand: 'Citizen', harga: 5400000, stok: 6 },
    { model: 'Hamilton Khaki Field H70455533', brand: 'Hamilton', harga: 9500000, stok: 0 },
  ];

  protected badgeClass(stok: number): string {
    if (stok === 0) return 'badge danger';
    if (stok <= 3) return 'badge warning';
    return 'badge success';
  }

  protected status(stok: number): string {
    if (stok === 0) return 'Habis';
    if (stok <= 3) return 'Stok Terbatas';
    return 'Tersedia';
  }
}
