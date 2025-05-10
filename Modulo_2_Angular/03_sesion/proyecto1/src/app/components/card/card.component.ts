import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: string = "Esto es una card diferente";
  contenido: string = "Utilizaremos Data Binding con las card que vamos a estar trabajando";
  botontext: string = "Conocer más";
  img: string = "https://picsum.photos/640/640?r" + Math.random();
  miDataBindingProperty: string = "Property Binding ";
  nombre: string = "";

  mostrarAlerta(){
    alert ("Y ahora estoy por -Event Binding- para comprender más la lógica.");
  }
}
