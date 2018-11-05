import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plato } from '../models/plato';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  platosCollection: AngularFirestoreCollection<Plato>;
  platos: Observable<Plato[]>;
  platoDoc: AngularFirestoreDocument<Plato>;

  constructor(public db: AngularFirestore) {
    this.platosCollection = this.db.collection('platos');
    this.platos = this.platosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

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

}
