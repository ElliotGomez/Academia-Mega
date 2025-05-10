import { Routes } from '@angular/router';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';
import { TodoComponent } from './Components/todo/todo.component';
import { HomeComponent } from './Page/home/home.component';
import { ErrorComponent } from './Page/error/error.component';
import { ProductosInfoComponent } from './Page/productos-info/productos-info.component';
import { ServicePageComponent } from './Page/service-page/service-page.component';
import { FormularioComponent } from './Page/formulario/formulario.component';

export const routes: Routes = [
  {
    path:'',
    component: FormularioComponent
  },
  {
    path:'servicio',
    component: ServicePageComponent
  },
  {
    path:'componentes',
    component: ProductosInfoComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'gestor',
    component: ProductManagerComponent
  },
  {
    path:'todo',
    component: TodoComponent
  },
  {
    path:'**',
    component: ErrorComponent
  }
];
