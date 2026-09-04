import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rupiah' })
export class RupiahPipe implements PipeTransform {
  transform(value: number | string): string {
    const angka = Number(value);
    if (isNaN(angka)) return 'Rp0';
    return 'Rp' + angka.toLocaleString('id-ID');
  }
}