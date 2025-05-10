import { Component } from '@angular/core';
import { TodoComponent } from './Components/todo/todo.component';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, TodoComponent, ProductManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  rolUsuario: string = '';
  tareaImportante: boolean = false;
  isUrgente: boolean = false;

  toggleImportante() {
    this.tareaImportante = !this.tareaImportante;
  }

  toggleUrgente() {
    this.isUrgente = !this.isUrgente;
  }
}

