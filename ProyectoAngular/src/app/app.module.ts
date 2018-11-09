import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CarouselModule, BsDropdownModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';

import { TabsModule } from 'ngx-bootstrap/tabs';

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
import { EstadoComponent } from './estado/estado.component';
import { EncabezadoadminComponent } from './encabezadoadmin/encabezadoadmin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { PendientesComponent } from './pendientes/pendientes.component';

import { FireService } from './services/fire.service';



const routes: Routes = [
  { path: '', redirectTo:'inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'olvido', component: OlvidoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contacto', component: ContactaradminComponent },
  { path: 'editar-perfil', component: EditarperfilComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'estado', component: EstadoComponent },
  { path: 'admin', component: MenuadminComponent },
  { path: 'pendientes', component: PendientesComponent },
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
    CarritoComponent,
    EstadoComponent,
    EncabezadoadminComponent,
    MenuadminComponent,
    PendientesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(), AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    TabsModule.forRoot(),
    FormsModule,
    SortableModule.forRoot(),
    TooltipModule.forRoot(),
    
  ],
  providers: [
    FireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
