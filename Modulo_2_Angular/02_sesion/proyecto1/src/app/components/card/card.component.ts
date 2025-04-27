import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: string = "Esto es una card";
  contenido: string = "Esto es una card que vamos a estar trabajando";
  botontext: string = "Conocer más";
  name: string = "Alvaro Elliot Gómez Chávez"
}
