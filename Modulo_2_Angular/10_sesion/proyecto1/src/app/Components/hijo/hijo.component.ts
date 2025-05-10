import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent {
  @Input() info = {
    nombre:'',
    edad:0,
    profesion:''
  }
  @Output() mensaje = new EventEmitter();

  enviarMensaje(){
    this.mensaje.emit("¡HOLA! " + this.info.nombre + ", diste click desde el componente hijo")
  }
}
