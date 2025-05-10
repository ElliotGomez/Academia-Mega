import { Component } from '@angular/core';
import { HijoComponent } from '../../Components/hijo/hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // Simulación de API
  usuarios = [
    {nombre: "Juan", edad: 25, profesion: "Ingeniero"},
    {nombre: "Ana", edad: 29, profesion: "Diseñadora"},
    {nombre: "Luis", edad: 22, profesion: "Estudiante"},
    {nombre: "Miguel", edad: 45, profesion: "Arquitencto"},
    {nombre: "Fernando", edad: 47, profesion: "Profesor"},
    {nombre: "Elliot", edad: 48, profesion: "Desarrollador Sr"}
  ]

  mensajeDelHijo: string = "";

  recibirMensaje(mensaje: string){
    this.mensajeDelHijo = mensaje
  }
}
