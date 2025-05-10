import { DataService } from './../../Service/data.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HijoServiceComponent } from '../../Components/hijo-service/hijo-service.component';

@Component({
  selector: 'app-service-page',
  imports: [FormsModule, HijoServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  newMessage:string="";

  constructor(private DataService: DataService){}

  updateMessage(){
    this.DataService.setMessage(this.newMessage);
  }
}
