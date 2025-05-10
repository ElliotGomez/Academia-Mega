import { DataService } from './../../Service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-service',
  imports: [],
  templateUrl: './hijo-service.component.html',
  styleUrl: './hijo-service.component.css'
})
export class HijoServiceComponent {
  message:string="";

  constructor(private DataService: DataService)  {}

  ngOnInit(){
    this.message = this.DataService.getMessage();
  }

  ngDoCheck(){
    this.message = this.DataService.getMessage();
  }
}
