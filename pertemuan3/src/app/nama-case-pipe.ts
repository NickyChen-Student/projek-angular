import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'namaCase' })
export class NamaCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}