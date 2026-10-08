import { Component } from '@angular/core';
import { formatRupiah } from '../../shared/format';

@Component({
  selector: 'app-menu1',
  imports: [],
  templateUrl: './menu1.html',
  styleUrl: './menu1.css',
})
export class Menu1 {
  protected readonly kpi = [
    { label: 'Total Penjualan', value: formatRupiah(542350000), trend: '+12,4%' },
    { label: 'Unit Terjual', value: '87', trend: '+7,1%' },
    { label: 'Transaksi', value: '64', trend: '+5,3%' },
    { label: 'Rata-rata / Transaksi', value: formatRupiah(8474218), trend: '+2,8%' },
  ];

  protected readonly terlaris = [
    { model: 'Seiko 5 Sports GMT SSK001', brand: 'Seiko', unit: 18 },
    { model: 'Tissot PRX Powermatic 80', brand: 'Tissot', unit: 15 },
    { model: 'Casio G-Shock GA-2100', brand: 'Casio', unit: 12 },
    { model: 'Orient Kamasu RA-AA0001', brand: 'Orient', unit: 9 },
    { model: 'Rolex Submariner Date 126610LN', brand: 'Rolex', unit: 3 },
  ];
}
