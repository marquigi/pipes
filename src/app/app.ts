import { CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// NOTA
interface Persona {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, TitleCasePipe, CurrencyPipe, DecimalPipe, KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  oggi = new Date();
  // NOTA

  // NOTA
  genericObj: { [key: string]: string } = {
    CPU: "Intel Core i7",
    RAM: "16GB",
    HDD: "2TB"
  }


  // NOTA
  // schedaTecnica: Map<string, string> = new Map();

  // NOTA
  // constructor() {
  //   // NOTA
  //   this.schedaTecnica.set("CPU", "Intel Core i7");
  // }


  // NOTA
  menu: Map<string, string[]> = new Map([
    ['Primi piatti', ['Spaghetti alle vongole', 'Rigatoni cacio e pepe']],
    ['Secondi piatti', ['Scaloppine al limone', 'Polpette al sugo']]
  ]);

  // Supponiamo che dal BackEnd mi arrivi questo dato.
  // Il mio obbiettivo è costruirci una Map che raggruppa le persone per fascia d'età.
  persone: Persona[] = [
    { name: 'Marco Rossi', age: 22, email: 'marco.rossi@example.com' },
    { name: 'Giulia Bianchi', age: 35, email: 'giulia.bianchi@example.com' },
    { name: 'Luca Verdi', age: 47, email: 'luca.verdi@example.com' },
    { name: 'Francesca Neri', age: 29, email: 'francesca.neri@example.com' },
    { name: 'Alessandro Gallo', age: 52, email: 'alessandro.gallo@example.com' },
    { name: 'Chiara Romano', age: 18, email: 'chiara.romano@example.com' },
    { name: 'Matteo Conti', age: 63, email: 'matteo.conti@example.com' },
    { name: 'Elena Ferri', age: 41, email: 'elena.ferri@example.com' },
    { name: 'Davide Moretti', age: 26, email: 'davide.moretti@example.com' },
    { name: 'Sara Colombo', age: 58, email: 'sara.colombo@example.com' },
    { name: 'Giorgio De Luca', age: 33, email: 'giorgio.deluca@example.com' },
    { name: 'Valentina Greco', age: 39, email: 'valentina.greco@example.com' },
    { name: 'Andrea Fontana', age: 44, email: 'andrea.fontana@example.com' },
    { name: 'Marta Lombardi', age: 27, email: 'marta.lombardi@example.com' },
    { name: 'Filippo Rinaldi', age: 70, email: 'filippo.rinaldi@example.com' }
  ];

  // mapPersone: Map<string, Persona[]> = new Map();

  // oppure

  mapPersone = new Map<string, Persona[]>();


  // NOTA
  constructor() {
    this.menu.set('Contorni', ['Patate al forno', 'Spinaci ripassati']);

    for (const p of this.persone) {
      let key = "";
      if (p.age < 18) {
        key = "0 - 17";
      } else if (p.age >= 18 && p.age <= 25) {
        key = "18 - 25";
      } else if (p.age >= 26 && p.age <= 35) {
        key = "26 - 35";
      } else if (p.age >= 36 && p.age <= 45) {
        key = "36 - 45";
      } else if (p.age >= 46) {
        key = "46+";
      }
    }
  }

}
