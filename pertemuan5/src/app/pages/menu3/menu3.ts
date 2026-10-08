import { Component } from '@angular/core';
import { formatRupiah } from '../../shared/format';

interface Transaksi {
  tanggal: string;
  pelanggan: string;
  produk: string;
  qty: number;
  total: number;
  status: 'Lunas' | 'Menunggu' | 'Batal';
}

@Component({
  selector: 'app-menu3',
  imports: [],
  templateUrl: './menu3.html',
  styleUrl: './menu3.css',
})
export class Menu3 {
  protected readonly rupiah = formatRupiah;

  protected readonly transaksi: Transaksi[] = [
    {
      tanggal: '16 Sep 2026',
      pelanggan: 'Andi Pratama',
      produk: 'Seiko 5 Sports GMT SSK001',
      qty: 2,
      total: 9000000,
      status: 'Lunas',
    },
    {
      tanggal: '16 Sep 2026',
      pelanggan: 'Siti Rahmawati',
      produk: 'Tissot PRX Powermatic 80',
      qty: 1,
      total: 8200000,
      status: 'Lunas',
    },
    {
      tanggal: '15 Sep 2026',
      pelanggan: 'Budi Santoso',
      produk: 'Rolex Submariner Date 126610LN',
      qty: 1,
      total: 185000000,
      status: 'Lunas',
    },
    {
      tanggal: '15 Sep 2026',
      pelanggan: 'Dewi Lestari',
      produk: 'Casio G-Shock GA-2100',
      qty: 3,
      total: 5250000,
      status: 'Lunas',
    },
    {
      tanggal: '14 Sep 2026',
      pelanggan: 'Rizky Hidayat',
      produk: 'Orient Kamasu RA-AA0001',
      qty: 2,
      total: 6400000,
      status: 'Menunggu',
    },
    {
      tanggal: '14 Sep 2026',
      pelanggan: 'Putri Anggraini',
      produk: 'Seiko Prospex Sumo SPB103',
      qty: 1,
      total: 7800000,
      status: 'Lunas',
    },
    {
      tanggal: '13 Sep 2026',
      pelanggan: 'Bayu Nugroho',
      produk: 'Tudor Black Bay 58 79030N',
      qty: 1,
      total: 52000000,
      status: 'Menunggu',
    },
    {
      tanggal: '13 Sep 2026',
      pelanggan: 'Maya Sari',
      produk: 'Citizen Promaster Eco-Drive',
      qty: 2,
      total: 10800000,
      status: 'Lunas',
    },
    {
      tanggal: '12 Sep 2026',
      pelanggan: 'Fajar Ramadhan',
      produk: 'Omega Speedmaster Professional',
      qty: 1,
      total: 95000000,
      status: 'Batal',
    },
    {
      tanggal: '12 Sep 2026',
      pelanggan: 'Intan Permata',
      produk: 'Hamilton Khaki Field H70455533',
      qty: 1,
      total: 9500000,
      status: 'Lunas',
    },
  ];

  protected badgeClass(status: Transaksi['status']): string {
    const map = { Lunas: 'success', Menunggu: 'warning', Batal: 'danger' } as const;
    return `badge ${map[status]}`;
  }
}
