import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from '../models/usuario';
import * as firebase from 'firebase';
import { FireService } from '../services/fire.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, AfterViewInit {

  usuario = {} as Usuario;
  password: string;
  confirmpw: string;
  //errorpw = '';

  constructor(private elementRef: ElementRef, public regService: FireService, public usrService: UserService) { }

  ngOnInit() {
    /*
    this.usuario.apellido = '';
    this.usuario.correo = '';
    this.usuario.direccion = '';
    this.usuario.edad = null;
    this.usuario.id = '';
    this.usuario.nombre = '';
    this.usuario.pass = '';
    this.usuario.sexo = '';*/
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }


  crearUsuario() {
    //this.usuario.roles.admin = false;
    //this.usuario.roles.cliente = true;
    this.usuario.admin = false;
    /*firebase.auth().createUserWithEmailAndPassword(this.usuario.correo, this.password).catch(function(error) {
      //this.errorpw = error.message;
    });*/
    this.usrService.registrar(this.usuario.correo, this.password);
    this.regService.agregarUsuario(this.usuario);
    this.usuario = {};

  }

}
