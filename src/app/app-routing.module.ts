import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from './components/carrito-compra/carrito-compra.component';
import { FacturaComponent } from './components/factura/factura.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path:"Productos", component: ProductosComponent},
  {path:"CarritoCompras", component: CarritoCompraComponent},
  {path:"Login", component: LoginComponent},
  {path:"", component: HomeComponent},
  {path:"Permisos", component: PermisosComponent},
  {path:"Publicidad", component: PublicidadComponent},
  {path:"RegistroLogin", component: RegistroLoginComponent},
  {path:"Usuario", component: UsuarioComponent},
  {path:"Permisos", component: PermisosComponent},
  {path:"Factura", component: FacturaComponent},
  {path:"Form", component: FormComponent},
  {path:"Tabla", component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
