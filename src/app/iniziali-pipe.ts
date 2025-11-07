import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from './app';

// Questa pipe, preso in input un array di persone,
// restituisce solo le persone che hanno il nome che inizia per una certa lettera
@Pipe({
  name: 'iniziali'
})
export class InizialiPipe implements PipeTransform {

  // NOTA
  transform(value: Persona[], ...args: string[]): Persona[] {
    // NOTA
    const lettera = args[0];
    // NOTA
    return value.filter(p => {
      // NOTA
      const nomi = p.name.split(' ');
      // NOTA
      return nomi[1].charAt(0).toLowerCase() === lettera.toLowerCase()
    })
  }

}
