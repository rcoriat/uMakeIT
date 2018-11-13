import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
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

  constructor(public perfilService: FireService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.perfilService.db.collection('usuarios', ref => ref.where('correo', '==' , 'cguillen@unimet.edu.ve')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(usuarios => {
      this.eusuario = usuarios[0];
      this.eusuario.pass = '';
    });
  }

  // editarUsuario(event, usuario: Usuario){
  //   this.eusuario = usuario;
  // }

  actualizarUsuario() {
    console.log(this.eusuario);
    this.perfilService.actualizarUsuario(this.eusuario);

  }





}
