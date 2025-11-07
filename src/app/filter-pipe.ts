import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from './app';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Persona[], ...args: string[]): Persona[] {
    // NOTTA

    const keyword = args[0].toLowerCase();
    // Filtro l'array quando il name o l'email contengono la chiave di ricerca
    return value.filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) || p.email.toLowerCase().includes(keyword)
      // NOTA
    )
  }

}
