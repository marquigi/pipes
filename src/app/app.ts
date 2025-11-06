import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// NOTA
interface Persona {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, TitleCasePipe, CurrencyPipe, DecimalPipe, KeyValuePipe, HttpClientModule, AsyncPipe],
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
  http = inject(HttpClient);

  // NOTA
  dipendenti$ = this.http.get<{
    data: { first_name: string; last_name: string }
  }>("https://reqres.in/api/users", {
    headers: { 'x-api-key': 'reqres-free-v1' }
  });


  // NOTA
  constructor() {
    this.menu.set('Contorni', ['Patate al forno', 'Spinaci ripassati']);

    // NOTA
    for (const p of this.persone) {
      // NOTA
      let key = "";
      // NOTA
      if (p.age < 18) {
        // NOTA
        key = "0 - 17";
        // NOTA
      } else if (p.age >= 18 && p.age <= 25) {
        // NOTA
        key = "18 - 25";
        // NOTA
      } else if (p.age >= 26 && p.age <= 35) {
        // NOTA
        key = "26 - 35";
        // NOTA
      } else if (p.age >= 36 && p.age <= 45) {
        // NOTA
        key = "36 - 45";
        // NOTA
      } else if (p.age >= 46) {
        // NOTA
        key = "46+";
      }
      // Se è gia presenta la chiave, metto la persona nell'array di quella chiave
      if (this.mapPersone.has(key)) {
        // NOTA
        this.mapPersone.get(key)!.push(p)
      } else {
        // Se la chiave non è presente
        // NOTA
        this.mapPersone.set(key, [p]);
      }
    }
  }

}
