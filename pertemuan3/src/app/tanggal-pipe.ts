import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tanggal' })
export class TanggalPipe implements PipeTransform {
  private namaBulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  transform(value: string): string {
    if (!value || value.length !== 8 || !/^\d{8}$/.test(value)) {
      return 'Format tanggal tidak valid';
    }
    const tgl = value.slice(0, 2);
    const bln = parseInt(value.slice(2, 4), 10);
    const thn = value.slice(4, 8);

    if (bln < 1 || bln > 12) {
      return 'Format tanggal tidak valid';
    }
    return `${tgl} ${this.namaBulan[bln - 1]} ${thn}`;
  }
}