import { CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
}
