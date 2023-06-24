import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CarritoCompraComponent } from './components/carrito-compra/carrito-compra.component';
import { FacturaComponent } from './components/factura/factura.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ProductosComponent } from './components/productos/productos.component';
// import { PublicidadComponent } from './components/publicidad/publicidad.component';
// import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormFacturasComponent } from './components/Forms/form-facturas/form-facturas.component';
import { FormPermisosComponent } from './components/Forms/form-permisos/form-permisos.component';
import { FormPersonasComponent } from './components/Forms/form-personas/form-personas.component';
import { FormProductosComponent } from './components/Forms/form-productos/form-productos.component';
import { FormPublicidadComponent } from './components/Forms/form-publicidad/form-publicidad.component';
import { FormUsuarioComponent } from './components/Forms/form-usuario/form-usuario.component';

const routes: Routes = [
  {path:"Productos", component: ProductosComponent},
  // {path:"CarritoCompras", component: CarritoCompraComponent},
  {path:"Login", component: LoginComponent},
  {path:"", component: HomeComponent},
  {path:"Permisos", component: PermisosComponent},
  // {path:"Publicidad", component: PublicidadComponent},
  // {path:"RegistroLogin", component: RegistroLoginComponent},
  {path:"Usuario", component: UsuarioComponent},
  {path:"Permisos", component: PermisosComponent},
  {path:"Factura", component: FacturaComponent},
  {path:"Tabla", component: TablaComponent},
  {path:"Persona", component: PersonaComponent},
  //formularios
  {path:"FormFacturas", component: FormFacturasComponent},
  {path:"FormPermisos", component: FormPermisosComponent},
  {path:"FormPersonas", component: FormPersonasComponent},
  {path:"FormProductos", component: FormProductosComponent},
  {path:"FormPublicidad", component: FormPublicidadComponent},
  {path:"FormUsuario", component: FormUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
