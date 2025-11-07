import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etaCSSClass'
})
export class EtaPipe implements PipeTransform {

  // NOTA
  transform(value: number, ...args: unknown[]): string {
    if (value < 30) {
      return 'text-success';
    }
    if (value > 60) {
      return 'text-danger';
    }
    return '';
  }

}
