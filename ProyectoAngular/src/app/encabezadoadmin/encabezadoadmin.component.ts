import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { UserService } from '../services/user.service';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-encabezadoadmin',
  templateUrl: './encabezadoadmin.component.html',
  styleUrls: ['./encabezadoadmin.component.css']
})
export class EncabezadoadminComponent implements OnInit {

  emailUsr = '';
  usuario = {} as Usuario;
  constructor(public usrService: UserService, public encabezadoService: FireService) { }

  ngOnInit() {
    this.emailUsr = this.usrService.getUsuario().email;
    // tslint:disable-next-line:max-line-length
    this.encabezadoService.db.collection('usuarios', ref => ref.where('correo', '==' , this.emailUsr)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(usuarios => {
      this.usuario = usuarios[0];
    });
  }
  
  cerrarSesion() {
    this.usrService.logout();
  }

}
