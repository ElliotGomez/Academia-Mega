import { Component } from '@angular/core';
import { UserDetailComponent } from '../../Components/user-detail/user-detail.component';
import { UserListComponent } from '../../Components/user-list/user-list.component';

@Component({
  selector: 'app-usuarios',
  imports: [UserListComponent, UserDetailComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  user:any;
}
