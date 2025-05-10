import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  imports: [FormsModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  nombre: string = "";
  imagen: string = "https://photos.google.com/share/AF1QipMjQ5NcshFArO1A9oqceUJBAXHjGJM5WGBah1Rd5FsEs8z8i6pGpemgFPl6W7jC2A/photo/AF1QipP7AcgZeiCR_dMLKYvlLV3KFkxLDfVdaKWfLqoq?key=U2JtRHdnTkV3WVRlTmp0MGNvWUZGbGFsdl8zdDh3";
  mensaje: string = "¡Bienvenido!";

  cambiarSaludo(){
    this.mensaje = `¡Hola ${this.nombre || "Visitante"}!`
  }
}
