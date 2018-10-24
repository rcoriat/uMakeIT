import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { OlvidoComponent } from './olvido/olvido.component';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { ContactaradminComponent } from './contactaradmin/contactaradmin.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { HistorialComponent } from './historial/historial.component';
import { CarritoComponent } from './carrito/carrito.component';


const routes: Routes = [
  { path:'', redirectTo:'inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'olvido', component: OlvidoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contacto', component: ContactaradminComponent },
  { path: 'editar-perfil', component: EditarperfilComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    OlvidoComponent,
    MenuComponent,
    EncabezadoComponent,
    PiedepaginaComponent,
    ContactaradminComponent,
    EditarperfilComponent,
    HistorialComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
