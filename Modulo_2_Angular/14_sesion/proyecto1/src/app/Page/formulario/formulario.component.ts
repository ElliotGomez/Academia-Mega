import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EdadPipe } from 'src/app/Pipes/edad.pipe';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule, EdadPipe],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  usuario = {
    nombre:'',
    email:'',
    edad:null
  }

  onSubmit(){
    console.log("Datos del Formulario: ", this.usuario)
    alert("Formaulario enviado correctamente")
  }

  nombreP: string = "Alvaro Elliot Gómez Chavez";
  fechaNacimientoP = "05/08/1976";
  salarioP: number = 5000;
}
