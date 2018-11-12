import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Plato } from '../models/plato';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Extra } from '../models/extra';
import { Reference } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Navigation } from 'selenium-webdriver';


@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})

export class MenuadminComponent implements OnInit, AfterViewInit {

  isFirstDisabled = false;
  porcentajeUpload: Observable<number>;
  public imagenURL: Observable<any>;

  platos: Plato[];
  extras = [];

  public nplato = {} as Plato; // nuevo plato
  public eplato: Plato; // plato de edicion
  uploaded: boolean;

  public subscriptionplatos: Subscription;
  public subscriptionimgURL: Subscription;
  public subscriptionextras: Subscription;

  public nextra = {} as Extra; // nuevo extra
  public eextra: Extra; // extra de edicion

  public incluido = []; 
  public noIncluido = []; 

  public nplatoextras: Observable<any>[];

  sentidoscatplato = [];
  ordenandocatplato = [];

  sentidoscatextra = [];
  ordenandocatextra = []

  // tslint:disable-next-line:max-line-length
  constructor(public platoService: FireService, private afStorage: AngularFireStorage) {
    this.uploaded = false;

  }

  ngOnInit() {
    if (this.subscriptionplatos !== undefined) {
      this.subscriptionplatos.unsubscribe();
    }
    this.subscriptionplatos = this.platoService.getPlatos().subscribe(platos => {
      this.platos = platos;
      console.log(this.platos);
    });
    // this.subscriptionimgURL = this.imagenURL.subscribe();
    if (this.subscriptionextras !== undefined) {
      this.subscriptionextras.unsubscribe();
    }
    this.subscriptionextras = this.platoService.getExtras().subscribe(extras => {
      this.extras = extras;
      for (let i = 0; i < this.extras.length; i++) {
        this.noIncluido[i] = this.extras[i].nombre;
      }
    });

    for (let i = 0; i < 5; i++) {
      this.ordenandocatplato.push(false);
      this.sentidoscatplato.push('desc');
      if (i >= 3) {
        continue;
      }
      this.ordenandocatextra.push(false);
      this.sentidoscatextra.push('desc');
    }
  }

  ngAfterViewInit() {
    //this.ngOnInit();
    console.log('ngAfterViewInit');
  }

  upload(event) {
    const file = event.target.files[0];
    const filePath = 'subidas-admin/' + file.name ;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    // ver el porcentaje de subida
    this.porcentajeUpload = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() =>
        this.imagenURL = fileRef.getDownloadURL()
        )
     )
    .subscribe();

    this.uploaded = true;
  }

  addPlato() {
    if ( this.nplato.tipo == null) {
      this.nplato.tipo = 'Principal';
    }
    if (this.nplato.personalizable == null) {
      this.nplato.personalizable = false;
    }
    if (this.imagenURL === undefined) {
      this.nplato.imagen = "https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85";
      if (this.incluido === []) {
        this.nplato.personalizable = false;
      } else if (this.nplato.personalizable) {
          for (let i = 0; i < this.incluido.length; i++) {
            for (let j = 0; j < this.extras.length; j++ ) {
              if (this.extras[j].nombre === this.incluido[i]) {
                this.nplato.extras[i] = this.extras[j].id;
                break;
              }
            }
          }
      }
      this.nplato.cantidad = 1;
      this.platoService.agregarPlato(this.nplato);
    } else {
      if (this.subscriptionimgURL !== undefined) {
        this.subscriptionimgURL.unsubscribe();
      }
      this.subscriptionimgURL = this.imagenURL.subscribe(params => {
        this.nplato.imagen = params;
        if (this.incluido === []) {
          this.nplato.personalizable = false;
        } else if (this.nplato.personalizable) {
            for (let i = 0; i < this.incluido.length; i++) {
              for (let j = 0; j < this.extras.length; j++ ) {
                if (this.extras[j].nombre === this.incluido[i]) {
                  this.nplato.extras[i] = this.extras[j].id;
                  break;
                }
              }
            }
        }
        this.nplato.cantidad = 1;
        this.platoService.agregarPlato(this.nplato);
      });
    }
    this.uploaded = false;
    //this.reiniciarIncluidoNoIncluido();
  }

  editarPlato(evento, plato) {
    this.eplato = plato;
  }

  borrarPlato(event, plato) {
    this.platoService.borrarPlato(plato);
  }


  actualizarPlato() {
    this.eplato.extras = [];
    if (this.imagenURL === undefined) {
      for (let i = 0; i < this.incluido.length; i++) {
        for (let j = 0; j < this.extras.length; j++ ) {
          if (this.extras[j].nombre === this.incluido[i]) {
            this.eplato.extras[i] = this.extras[j].id;
            break;
          }
        }
      }
      this.platoService.actualizarPlato(this.eplato);
      this.eplato = {} as Plato;
    } else {
      //this.subscriptionimgURL.unsubscribe();
      this.subscriptionimgURL = this.imagenURL.subscribe(params => {
        this.eplato.imagen = params;
        for (let i = 0; i < this.incluido.length; i++) {
          for (let j = 0; j < this.extras.length; j++ ) {
            if (this.extras[j].nombre === this.incluido[i]) {
              this.eplato.extras.push(this.extras[j].id);
              break;
            }
          }
        }
        console.log(this.eplato.extras);
        this.platoService.actualizarPlato(this.eplato);
        this.eplato = {} as Plato;
      });

    }
    this.uploaded = false;
  }

  toggleDisponibilidadPlato(evento, plato) {
    this.eplato = plato;
    if (this.eplato.disponibilidad != null) {
      this.eplato.disponibilidad = !this.eplato.disponibilidad;
    } else {
      this.eplato.disponibilidad = true;
    }
    this.actualizarPlato();
  }

  togglePersonalizableNPlato(evento) {
    if (this.nplato.personalizable != null) {
      this.nplato.personalizable = !this.nplato.personalizable;
    } else {
      this.nplato.personalizable = true;
    }
  }

  togglePersonalizableEPlato(evento) {
    if (this.eplato.personalizable != null) {
      this.eplato.personalizable = !this.eplato.personalizable;
    } else {
      this.eplato.personalizable = true;
    }
  }

  limpiarNPlato() {
    this.nplato.cantidad = null;
    this.nplato.descripcion = null;
    this.nplato.disponibilidad = null;
    this.nplato.id = null;
    this.nplato.imagen = null;
    this.nplato.nombre = null;
    this.nplato.personalizable = null;
    this.nplato.precio = null;
    this.nplato.tipo = null;
    this.nplato.extras = [];
  }

  limpiarEPlato() {
    this.eplato.cantidad = null;
    this.eplato.descripcion = null;
    this.eplato.disponibilidad = null;
    this.eplato.id = null;
    this.eplato.imagen = null;
    this.eplato.nombre = null;
    this.eplato.personalizable = null;
    this.eplato.precio = null;
    this.eplato.tipo = null;
    this.eplato.extras = [];
  }

  reiniciarPlatos() {
    this.subscriptionplatos.unsubscribe();
    this.subscriptionplatos = this.platoService.getPlatos().subscribe(p => {
      this.platos = p;
    });


    this.imagenURL = undefined;
    this.uploaded = false;
  }

  addExtra() {
    if (this.imagenURL === undefined) {
      this.nextra.imagen = "https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85";
      this.platoService.agregarExtra(this.nextra);
    } else {
      // this.subscriptionimgURL.unsubscribe(); a veces no funciona. Por qué? Who knows?
      this.subscriptionimgURL = this.imagenURL.subscribe(params => {
        this.nextra.imagen = params;
        this.platoService.agregarExtra(this.nextra);
      });
    }
    this.uploaded = false;
  }

  editarExtra(evento, extra) {
    this.eextra = extra;
  }

  borrarExtra(event, extra) {
    this.platoService.borrarExtra(extra);
  }

  actualizarExtra() {
    if (this.imagenURL === undefined) {
      this.platoService.actualizarExtra(this.eextra);
      this.eextra = {} as Extra;
    } else {
      //this.subscriptionimgURL.unsubscribe();
      this.subscriptionimgURL = this.imagenURL.subscribe(params => {
        this.eextra.imagen = params;
        this.platoService.actualizarExtra(this.eextra);
        this.eextra = {} as Plato;
      });

    }
    this.uploaded = false;
  }

  toggleDisponibilidadExtra(evento, extra) {
    this.eextra = extra;
    if (this.eextra.disponible != null) {
      this.eextra.disponible = !this.eextra.disponible;
    } else {
      this.eextra.disponible = true;
    }
    this.actualizarExtra();
  }

  limpiarNExtra() {
    this.nextra.disponible = null;
    this.nextra.id = null;
    this.nextra.imagen = null;
    this.nextra.nombre = null;
    this.nextra.precio = null;
  }

  reiniciarExtras() {
    this.subscriptionextras.unsubscribe();
    this.subscriptionextras = this.platoService.getExtras().subscribe(e => {
      this.extras = e;
    });
    this.imagenURL = undefined;
    this.uploaded = false;
  }

  hazConsoleLog(x) {
    console.log(x);
  }

  reiniciarIncluidoNoIncluido() {
    this.noIncluido = [];
    for (let i = 0; i < this.extras.length; i++) {
      this.noIncluido.push(this.extras[i].nombre);
      //console.log(this.noIncluido[i]);
    }
    this.incluido = [];
  }

  inicializarIncluidoNoIncluidoEdit() {
    this.incluido = [];
    if (this.eplato.personalizable && this.eplato.extras !== []) {
      for (let i = 0; i < this.eplato.extras.length; i++) {
        for (let j = 0; j < this.extras.length; j++ ) {
          if (this.extras[j].id === this.eplato.extras[i]) {
            this.incluido.push(this.extras[j].nombre);
            break;
          }
        }
      }
    }
    this.noIncluido = [];
    for (let i = 0; i < this.extras.length; i++) {
      let agregarANoIncluido = true;
      for (let j = 0; j < this.incluido.length; j++) {
        if (this.extras[i].nombre === this.incluido[j]) {
          agregarANoIncluido = false;
          break;
        }
      }
      if (agregarANoIncluido) {
        this.noIncluido.push(this.extras[i].nombre);
      }
    }
  }

  ordenarPorPlato(categoria: string, indicecat: number) {
   this.platoService.ordenarPorCategoria('platos', categoria, this.sentidoscatplato[indicecat]).subscribe(platos => {
    
    this.platos = platos;
    if (this.sentidoscatplato[indicecat] === 'asc') {
      this.sentidoscatplato[indicecat] = 'desc';
    } else {
      this.sentidoscatplato[indicecat] = 'asc';
    }
    console.log(this.sentidoscatplato);
      for (let i = 0; i < 5; i++) {
        this.ordenandocatplato[i] = false;
        if (i === indicecat) {
          this.ordenandocatplato[i] = true;
        }
      }
      console.log(this.ordenandocatplato);
    });

  }

  ordenarExtras(categoria: string, indicecat: number) {
    this.platoService.ordenarPorCategoria('extras', categoria, this.sentidoscatextra[indicecat]).subscribe(extras => {
      this.extras = extras;
      if(this.sentidoscatextra[indicecat] === 'asc') {
        this.sentidoscatextra[indicecat] = 'desc';
      } else {
        this.sentidoscatextra[indicecat] = 'asc';
      }
      for (let i = 0; i < 3; i++) {
        this.ordenandocatextra[i] = false;
        if (i === indicecat) {
          this.ordenandocatextra[i] = true;
        }
      }
    });
  }

}

