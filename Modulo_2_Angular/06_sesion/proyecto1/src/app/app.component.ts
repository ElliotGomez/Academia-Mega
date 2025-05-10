import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from './Components/todo/todo.component';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, ProductManagerComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  rolUsuario: string = 'admin';
  edad : number = 25;

  tareaImportante = true;
}

