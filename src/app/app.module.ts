import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { CarritoCompraComponent } from './components/carrito-compra/carrito-compra.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormComponent } from './components/Forms/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './components/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PersonaComponent } from './components/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './components/Forms/Formulario-2/formulario/formulario.component';
import { FormUsuarioComponent } from './components/Forms/Formulario-2/formulario/FormUsuario/form-usuario/form-usuario.component';
import { FormPublicidadComponent } from './components/Forms/Formulario-2/formulario/FormPublicidad/form-publicidad/form-publicidad.component';
import { FormProductosComponent } from './components/Forms/Formulario-2/formulario/FormProductos/form-productos/form-productos.component';
import { FormPersonasComponent } from './components/Forms/Formulario-2/formulario/FormPersonas/form-personas/form-personas.component';
import { FormPermisosComponent } from './components/Forms/Formulario-2/formulario/FormPermisos/form-permisos/form-permisos.component';
import { FormFacturasComponent } from './components/Forms/Formulario-2/formulario/FormFacturas/form-facturas/form-facturas.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistroLoginComponent,
    PublicidadComponent,
    FacturaComponent,
    ProductosComponent,
    LoginComponent,
    PermisosComponent,
    CarritoCompraComponent,
    MenuComponent,
    HomeComponent,
    FormComponent,
    TablaComponent,
    PersonaComponent,
    FormularioComponent,
    FormUsuarioComponent,
    FormPublicidadComponent,
    FormProductosComponent,
    FormPersonasComponent,
    FormPermisosComponent,
    FormFacturasComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
