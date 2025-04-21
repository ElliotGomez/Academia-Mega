import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto 1';
  titulo = 'Mi primera SPA con Angular';
  nombre = 'Alvaro Elliot Gómez Chávez';
  edad = 48;
  version = 'Angular 19.2.7';
  fecha = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
