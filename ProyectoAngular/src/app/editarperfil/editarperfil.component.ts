import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { UserService } from '../services/user.service';
import { Usuario } from '../models/usuario';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {

  public usuario: Usuario;
  eusuario: Usuario;

  public subscriptionusuarios: Subscription;
  password = '';
  confirmpw = '';
  emailUsr = '';
  pwActual = '';

  constructor(public perfilService: FireService, public usrService: UserService) { }

  ngOnInit() {
    this.emailUsr = this.usrService.getUsuario().email;
    // tslint:disable-next-line:max-line-length
    this.perfilService.db.collection('usuarios', ref => ref.where('correo', '==' , this.emailUsr)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(usuarios => {
      this.eusuario = usuarios[0];
    });
  }

  actualizarUsuario() {
    this.usrService.login(this.emailUsr, this.pwActual);
    this.usrService.cambiarPW(this.password);
    this.perfilService.actualizarUsuario(this.eusuario);
  }

}
