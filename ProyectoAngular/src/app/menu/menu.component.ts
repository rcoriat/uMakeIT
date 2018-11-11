import { Component, OnInit, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FireService } from '../services/fire.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Reference } from '@angular/fire/firestore';
import { Plato } from '../models/plato';
import { Extra } from '../models/extra';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  modalRef: BsModalRef;
  public platoselect = {} as Plato ;
  entradas = [];
  principales = [];
  postres = [];
  extras = [];

  public incluido = [];
  public noIncluido = [];  
  public preciototal;

  public extrasselect = [];
  public subscriptionextras: Subscription;

  // tslint:disable-next-line:max-line-length
  constructor(private elementRef: ElementRef, private modalPlato: BsModalService, public platoService: FireService, private afStorage: AngularFireStorage, ) { }
  

  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    this.subscriptionextras = this.platoService.db.collection('extras', ref => ref.where('disponible', '==' , true)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
       const data = a.payload.doc.data() as Extra;
       data.id = a.payload.doc.id;
       return data;
     });
   })).subscribe(extras => {
      this.extras = extras;
      
     console.log(this.extras);
   });


    this.platoService.db.collection('platos', ref => ref.where('tipo', '==' , 'Entrada')).snapshotChanges().pipe(map(actions => {
       return actions.map(a => {
        const data = a.payload.doc.data() as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(entradas => {
      for (let i = 0; i < entradas.length; i++) {
        if (entradas[i].disponibilidad) {
          this.entradas.push(entradas[i]);
        }
      }
      
      console.log(this.entradas);
    });

    this.platoService.db.collection('platos', ref => ref.where('tipo', '==' , 'Principal')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(principales => {
      for (let i = 0; i < principales.length; i++) {
        if (principales[i].disponibilidad) {
          this.principales.push(principales[i]);
        }
      }
      console.log(this.principales);
    });

    this.platoService.db.collection('platos', ref => ref.where('tipo', '==' , 'Postre')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Plato;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(postres => {
      for (let i = 0; i < postres.length; i++) {
        if (postres[i].disponibilidad) {
          this.postres.push(postres[i]);
        }
      }
      console.log(this.postres);
    });

  }

  mandarPlato(plato: Plato) {
    this.platoselect = plato;
    
    if (this.subscriptionextras !== undefined) {
      this.subscriptionextras.unsubscribe();
    }
    // tslint:disable-next-line:max-line-length
    this.subscriptionextras = this.platoService.db.collection('extras', ref => ref.where('disponible', '==' , true)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
       const data = a.payload.doc.data() as Extra;
       data.id = a.payload.doc.id;
       return data;
     });
   })).subscribe(extras => {
      this.extrasselect = [];
      this.incluido = [];
      this.noIncluido = [];
      this.extras = extras;
      this.preciototal = this.platoselect.precio;
      for (let i = 0; i < this.platoselect.extras.length; i++) {
        for (let j = 0; j < this.extras.length; j++) {
          if (this.extras[j].id === this.platoselect.extras[i]) {
            this.extrasselect.push(this.extras[j]);
            this.noIncluido.push(this.extras[j].nombre + ' - Bs.S ' + this.extras[j].precio);
            break;
          }
        }
      }
   });
    /*
    for (let i = 0; i < this.platoselect.extras.length; i++) {
      for (let j = 0; j < this.extras.length; j++) {
        if (this.extras[j].id === this.platoselect.extras[i]) {
          this.extrasselect.push(this.extras[j]);
          this.noIncluido.push(this.extras[j].nombre);
          break;
        }
      }
    }*/
    
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }





}
