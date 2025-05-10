import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css' ]
})
export class ProductosComponent {
  @Input() info: any;
  @Output() seleccionado = new EventEmitter();

  seleccionar(){
    this.seleccionado.emit(this.info);
  }
}
