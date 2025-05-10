import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  rolUsuario: string = 'user'; // Ejemplo de rol
  nuevaTarea: string = '';
  tareas: { texto: string; completada: boolean }[] = [
    { texto: 'Aprender Angular', completada: false },
    { texto: 'Hacer Ejercicio', completada: false },
    { texto: 'Dormir', completada: false }
  ];

  agregarTareas() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push({ texto: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  limpiarTareas() {
    this.tareas = [];
  }

  toggleCompletar(index: number) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas[index].completada = !this.tareas[index].completada;
    }
  }

  eliminarTarea(index: number) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1);
    }
  }
}

