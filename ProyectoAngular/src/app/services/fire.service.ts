import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plato } from '../models/plato';
import { Extra } from '../models/extra';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  platosCollection: AngularFirestoreCollection<Plato>;
  platos: Observable<Plato[]>;
  platoDoc: AngularFirestoreDocument<Plato>;
  extrasCollection: AngularFirestoreCollection<Extra>;
  extras: Observable<Extra[]>;
  extraDoc: AngularFirestoreDocument<Extra>;

  constructor(public db: AngularFirestore) {
    this.platosCollection = this.db.collection('platos');
    this.platos = this.platosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.extrasCollection = this.db.collection('extras');
    this.extras = this.extrasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Extra;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  // Metodos platos
  getPlatos() {
    return this.platos;
  }

  borrarPlato(plato: Plato) {
    this.platoDoc = this.db.doc(`platos/${plato.id}`);
    this.platoDoc.delete();
  }

  agregarPlato(plato: Plato) {
    this.platosCollection.add(plato);
  }

  actualizarPlato(plato: Plato) {
    this.platoDoc = this.db.doc(`platos/${plato.id}`);
    this.platoDoc.update(plato);
  }

  // Metodos extras
  getExtras() {
    return this.extras;
  }

  borrarExtra(extra: Extra) {
    this.extraDoc = this.db.doc(`extras/${extra.id}`);
    this.extraDoc.delete();
  }

  agregarExtra(extra: Extra) {
    this.extrasCollection.add(extra);
  }

  actualizarExtra(extra: Extra) {
    this.extraDoc = this.db.doc(`extras/${extra.id}`);
    this.extraDoc.update(extra);
  }



}
