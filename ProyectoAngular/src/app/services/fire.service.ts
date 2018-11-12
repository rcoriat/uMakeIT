import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plato } from '../models/plato';
import { Extra } from '../models/extra';
import { Usuario } from '../models/usuario';
import { Contador } from '../models/contador';
import { Pedido } from '../models/pedido';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  public platosCollection: AngularFirestoreCollection<Plato>;
  platos: Observable<Plato[]>;
  platoDoc: AngularFirestoreDocument<Plato>;
  extrasCollection: AngularFirestoreCollection<Extra>;
  extras: Observable<Extra[]>;
  extraDoc: AngularFirestoreDocument<Extra>;
  public usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  usuarioDoc: AngularFirestoreDocument<Usuario>;
  platosCarritosCollection: AngularFirestoreCollection<Plato>;
  platosCarritos: Observable<Plato[]>;
  platosCarritosDoc: AngularFirestoreDocument<Plato>;
  contadorPedidosCollection: AngularFirestoreCollection<Contador>;
  contadoresPedidos: Observable<Contador[]>;
  contadorDoc: AngularFirestoreDocument<Contador>;
  platosPedidosCollection: AngularFirestoreCollection<Plato>;
  platosPedidos: Observable<Plato[]>;
  platosPedidosDoc: AngularFirestoreDocument<Plato>;
  pedidosCollection: AngularFirestoreCollection<Pedido>;
  pedidos: Observable<Pedido[]>;
  pedidosDoc: AngularFirestoreDocument<Pedido>;
  
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
    this.usuariosCollection = this.db.collection('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data as Usuario;
        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      });
    }));
    this.platosCarritosCollection = this.db.collection('platoscarritos');
    this.platosCarritos = this.platosCarritosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.contadorPedidosCollection = this.db.collection('contadorpedidos');
    this.contadoresPedidos = this.contadorPedidosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data as Contador;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.platosPedidosCollection = this.db.collection('platospedidos');
    this.platosPedidos = this.platosPedidosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.pedidosCollection = this.db.collection('pedidos');
    this.pedidos = this.platosPedidosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data as Pedido;
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

  // Metodos usuarios
  getUsuarios() {
    return this.usuarios;
  }

  borrarUsuario(usuario: Usuario) {
    this.usuarioDoc = this.db.doc(`usuarios/${usuario.id}`);
    this.usuarioDoc.delete();
  }

  agregarUsuario(usuario: Usuario) {
    this.usuariosCollection.add(usuario);
  }

  actualizarUsuario(usuario: Usuario) {
    this.usuarioDoc = this.db.doc(`usuarios/${usuario.id}`);
    this.usuarioDoc.update(usuario);
  }

  // Metodos platos carritos
  getPlatosCarritos() {
    return this.platosCarritos;
  }

  borrarPlatoCarrito(plato: Plato) {
    this.platosCarritosDoc = this.db.doc(`platoscarritos/${plato.id}`);
    this.platosCarritosDoc.delete();
  }

  agregarPlatoCarrito(plato: Plato) {
    // tslint:disable-next-line:max-line-length
    this.db.collection('platos', ref => ref.where('nombre', '==' , plato.nombre)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
       const data = a.payload.doc.data() as Plato;
       data.id = a.payload.doc.id;
       return data;
      });
    })).subscribe(platos => {
     plato.idMenu = platos[0].id;
     this.platosCarritosCollection.add(plato);
    });
  }

  actualizarPlatoCarrito(plato: Plato) {
    this.platosCarritosDoc = this.db.doc(`platoscarritos/${plato.id}`);
    this.platosCarritosDoc.update(plato);
  }

  // Metodos contador pedidos
  getContadorPedidos() {
    return this.contadoresPedidos[0];
  }

  actualizarContadorPedidos(contador: Contador) {
    this.contadorDoc = this.db.doc(`contadorpedidos/${contador.id}`);
    this.contadorDoc.update(contador);
  }

  // Metodos platos pedidos
  getPlatosPedidos() {
    return this.platosPedidos;
  }

  borrarPlatoPedido(plato: Plato) {
    this.platosPedidosDoc = this.db.doc(`platospedidos/${plato.id}`);
    this.platosPedidosDoc.delete();
  }

  agregarPlatoPedido(plato: Plato) {
    // tslint:disable-next-line:max-line-length
    this.db.collection('platos', ref => ref.where('nombre', '==' , plato.nombre)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
       const data = a.payload.doc.data() as Plato;
       data.id = a.payload.doc.id;
       return data;
      });
    })).subscribe(platos => {
     plato.idMenu = platos[0].id;
     this.platosPedidosCollection.add(plato);
    });
  }

  // Metodos pedidos
  getPedidos() {
    return this.pedidos;
  }

  agregarPedido(pedido: Pedido) {
    this.pedidosCollection.add(pedido);
  }

  borrarPedido(pedido: Pedido) {
    this.pedidosDoc = this.db.doc(`pedidos/${pedido.id}`);
    this.pedidosDoc.delete();
  }


  ordenarPorCategoria(collection: string, categoria: string, sentido: string) {
    if (collection === 'platos') {
      if (sentido === 'asc') {
        return this.db.collection('platos', ref => ref.orderBy(categoria, 'asc')).snapshotChanges().pipe(map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Plato;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
      } else {
        return this.db.collection(collection, ref => ref.orderBy(categoria, 'desc')).snapshotChanges().pipe(map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Plato;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
      }
    } else if (collection === 'extras') {
        if (sentido === 'asc') {
          return this.db.collection('extras', ref => ref.orderBy(categoria, 'asc')).snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as Plato;
              data.id = a.payload.doc.id;
              return data;
            });
          }));
        } else {
          return this.db.collection('extras', ref => ref.orderBy(categoria, 'desc')).snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as Plato;
              data.id = a.payload.doc.id;
              return data;
            });
          }));
        }
    }
  }


}
