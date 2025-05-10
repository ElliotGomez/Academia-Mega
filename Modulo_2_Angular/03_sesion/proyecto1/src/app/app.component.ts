import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './components/saludo/saludo.component';
import { CardComponent } from './components/card/card.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule, RouterOutlet, SaludoComponent, CardComponent, TarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

}
