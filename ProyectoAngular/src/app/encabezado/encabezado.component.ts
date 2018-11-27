import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FireService } from '../services/fire.service';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
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
