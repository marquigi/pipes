import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sommaNumeri'// Questa pipe si utilizza scrivendo " | sommaNumeri"
})
export class SommaNumeriPipe implements PipeTransform {

  // transform è il metodo che contiene la logica di funzionamento della pipe
  // value è l'input della pipe (es. [1, 2, 3] | sommaNumeri)
  // args contiene i parametri della pipe ( es. args[0], args[1], ecc)
  transform(value: number[], ...args: never[]): number {
    let r = 0;
    // NOTA
    for (const n of value) {
      r += n;
    }
    return r;
  }

}
