import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Usuario } from '../models/usuario';
import { FireService } from '../services/fire.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router, private guardService: FireService) {
    this.ngOnInit();
  }
  emailUsr = '';
  usuario: Usuario;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.emailUsr = this.authService.getUsuario().email;
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.uid.subscribe(user => {

        this.emailUsr = this.authService.getUsuario().email;
        // tslint:disable-next-line:max-line-length
        this.guardService.db.collection('usuarios', ref => ref.where('correo', '==' , this.emailUsr)).snapshotChanges().pipe(map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Usuario;
            data.id = a.payload.doc.id;
            return data;
          });
        })).subscribe(usuarios => {
          this.usuario = usuarios[0];
          console.log(this.usuario);
          console.log('Entre', user);
          if (user && !this.usuario.admin) {
            console.log('Cliente');
            return resolve(true);
          } else if (user && this.usuario.admin) {
            console.log('Admin');
            this.router.navigate(['admin']);
            return resolve(false);
          } else {
            console.log('Not User');
            this.router.navigate(['inicio']);
            return resolve(false);
          }
        });

      });
    });
  }
}
