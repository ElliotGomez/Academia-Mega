import { Component } from '@angular/core';
import { TodoComponent } from './Components/todo/todo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TodoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}

