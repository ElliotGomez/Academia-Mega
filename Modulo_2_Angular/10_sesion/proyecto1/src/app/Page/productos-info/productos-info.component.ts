import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from "../../Components/productos/productos.component";
import { DetallesComponent } from '../../Components/detalles/detalles.component';

@Component({
  selector: 'app-productos-info',
  imports: [CommonModule, ProductosComponent, DetallesComponent],
  templateUrl: './productos-info.component.html',
  styleUrl: './productos-info.component.css'
})
export class ProductosInfoComponent {
    items=[
      {id:1, nombre:'Producto A', descripcion:'Descripcion del Producto A', precio:100},
      {id:2, nombre:'Producto B', descripcion:'Descripcion del Producto B', precio:200},
      {id:3, nombre:'Producto C', descripcion:'Descripcion del Producto C', precio:300},
      {id:4, nombre:'Producto D', descripcion:'Descripcion del Producto D', precio:400},
      {id:5, nombre:'Producto E', descripcion:'Descripcion del Producto E', precio:500}
    ]

    itemSeleccionado:any = null;
    mostrarMensaje:boolean = true;

    seleccionarItem(item:any) {
        this.itemSeleccionado = item;
        this.mostrarMensaje = false;
    }
}
