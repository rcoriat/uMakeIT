import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Plato {id: String; cantidad:number; descripcion: String; disponible: boolean; imagen: String;  nombre: String; personalizable: boolean; precio: number; tipo: String}

@Injectable({
  providedIn: 'root'
})

// export interface Usuario {admin: boolean; nombre: String; apellido: String; correo: String; contraseña: String;}

export class FireService {

  private platosCollection: AngularFirestoreCollection<Plato>;
  private usuariosCollection: AngularFirestoreCollection<any>;
  private pedidosCollection: AngularFirestoreCollection<any>;
  private extrasCollection: AngularFirestoreCollection<any>;
  
  platos: Observable<Plato[]>;
  usuarios: Observable<any[]>;
  pedidos: Observable<any[]>;
  extras: Observable<any[]>;
  db; 
  

  constructor(db: AngularFirestore) { 
    this.platosCollection = db.collection<Plato>('platos');
    this.usuariosCollection = db.collection<any>('usuarios');
    this.pedidosCollection = db.collection<any>('pedidos');
    this.extrasCollection = db.collection<any>('extras');
 
    this.platos = this.platosCollection.valueChanges();
    this.usuarios = db.collection('usuarios').valueChanges();
    this.pedidos = db.collection('pedidos').valueChanges();
    this.extras = db.collection('extras').valueChanges();
    
    this.db = db;


  }

  agregarPlato(pNombre: String, pDescripcion: String, pPrecio: number, pCantidad: number, pDisponible: boolean, pPersonalizable: boolean, pImagen: String, pTipo: String) {
    const qID = this.db.createID();
    const qCantidad =  pCantidad; 
    const qDescripcion = pDescripcion; 
    const qDisponible =  pDisponible; 
    const qImagen = pImagen;  
    const qNombre = pNombre; 
    const qPersonalizable = pPersonalizable; 
    const qPrecio = pPrecio; 
    const qTipo = pTipo;
    
    this.platosCollection.add({ 
      id: qID, 
      cantidad: qCantidad, 
      descripcion: qDescripcion, 
      disponible: qDisponible, 
      imagen:  qImagen,  
      nombre: qNombre, 
      personalizable: qPersonalizable, 
      precio: qPrecio, 
      tipo: qTipo
    });

  }

  getPlatos() {
    return this.platos;
  }

  getUsuarios() {
    return this.usuarios;
  }

  getPedidos() {
    return this.pedidos;
  }

  getExtras(){
    return this.extras;    
  }

}
