import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EdadPipe } from './Pipes/edad.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    RouterLink,
    EdadPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nombre: string = "Alvaro Elliot Gómez Chavez";
  fechaNacimiento = "05/08/1976";
  salario: number = 5000;
}
