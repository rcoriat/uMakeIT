import { Injectable } from '@angular/core';
import { of as observableOf, Observable, observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take, switchMap } from 'rxjs/operators';
import { auth, User } from 'firebase';
import { setOffsetToUTC } from 'ngx-bootstrap/chronos/units/offset';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn;
  currentUser: firebase.User;
  userKey: any;

  uid = this.afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<Usuario>(`usuarios/${user.uid}`).valueChanges();
      } else {
        return observableOf(null);
      }
    })
  );

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.loggedIn = false;
    this.afAuth.auth.onAuthStateChanged(
      // tslint:disable-next-line:no-shadowed-variable
      (auth) => {
        if (auth != null) {
          this.currentUser = this.afAuth.auth.currentUser;
          this.userKey = auth.uid;
        } else {
        }
      });
    this.uid = this.afAuth.authState;
  }

  login(email: string, pw: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pw)
      .then(res => {
        console.log('respuesta', res);
        this.router.navigate(['menu']);
        localStorage.setItem('user', JSON.stringify(res.user));
        resolve(res);
      }, err => reject(err));
      //this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());
      //this.loggedIn = true;
      //this.isLoggedIn().pipe(map(user => console.log(user)));
      //this.router.navigate(['menu']);
    });
  }

  logout() {
    //this.afAuth.auth.signOut();
    //this.loggedIn = false;
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }


  registrar(email: string, pw: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pw);
  }

  isLoggedIn() {
    return this.uid.pipe(
      take(1),
      map(user => user ? true : false),
    );
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`usuarios/${user.id}`);
    const data: Usuario = {
      id: user.id,
      correo: user.correo,
      roles: {
        admin: user.roles.admin
      }
    };
    return userRef.set(data, { merge: true});
  }

  private checkAuthorization(user: Usuario, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  canRead(user: Usuario): boolean {
    const allowed = ['admin', 'cliente'];
    return this.checkAuthorization(user, allowed);
  }

  canAdmin(user: Usuario): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  getUsuario() {
    return this.currentUser;
  }

  cambiarPW(pw: string) {
    this.afAuth.auth.currentUser.updatePassword(pw);
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error));
  }


}
