import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-manager',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent {
  categoriaSeleccionada: string = ''; // Categoría inicial seleccionada

  productos = {
    electronica: [
      { nombre: 'Laptop', precio: 1200, descuento: 10, disponible: true },
      { nombre: 'Smartphone', precio: 800, descuento: 0, disponible: true },
      { nombre: 'Auriculares', precio: 150, descuento: 5, disponible: false }
    ],
    ropa: [
      { nombre: 'Camiseta', precio: 20, descuento: 15, disponible: true },
      { nombre: 'Jeans', precio: 50, descuento: 0, disponible: true },
      { nombre: 'Chaqueta', precio: 100, descuento: 20, disponible: false }
    ],
    hogar: [
      { nombre: 'Sofá', precio: 500, descuento: 10, disponible: true },
      { nombre: 'Mesa', precio: 200, descuento: 0, disponible: true },
      { nombre: 'Lámpara', precio: 80, descuento: 5, disponible: false }
    ]
  };

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
}
