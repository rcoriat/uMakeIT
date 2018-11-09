import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FireService } from '../services/fire.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Plato } from '../models/plato';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Extra } from '../models/extra';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})

export class MenuadminComponent implements OnInit {

  isFirstDisabled = false;
  porcentajeUpload: Observable<number>;
  public imagenURL: Observable<any>;

  platos = [];
  extras = [];

  public nplato = {} as Plato; // 
  nuevo plato
  public eplato: Plato; // plato de edicion
  modalAgregar: BsModalRef; // modal confirmar
  uploaded: boolean;

  public subscriptionplatos: Subscription;
  public subscriptionimgURL: Subscription;
  public subscriptionextras: Subscription;

  public nextra = {} as Extra; // nuevo extra
  public eextra: Extra; // extra de edicion

  public incluido = []; // json bs-sortable de extras incluidos
  public noIncluido = []; // json bs-sortable de extras no incluidos


  constructor(public platoService: FireService, private afStorage: AngularFireStorage, private modalService: BsModalService) {
    this.uploaded = false;
  }

  ngOnInit() {
      this.subscriptionplatos = this.platoService.getPlatos().subscribe(platos => {
        this.platos = platos;
        console.log(this.platos);
      });
      // this.subscriptionimgURL = this.imagenURL.subscribe();
      this.subscriptionextras = this.platoService.getExtras().subscribe(extras => {
        this.extras = extras;
        for (let i = 0; i < this.extras.length; i++) {
          this.noIncluido[i] = this.extras[i].nombre;
          console.log(this.noIncluido[i]);
        }
      });

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
    if (this.imagenURL == undefined) {
      this.nplato.imagen = "https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85";
      this.platoService.agregarPlato(this.nplato);
    } else {
      this.subscriptionimgURL.unsubscribe();
      this.subscriptionimgURL = this.imagenURL.subscribe(params => {
        this.nplato.imagen = params;
        this.platoService.agregarPlato(this.nplato);
      });
    }
    this.uploaded = false;
  }

  editarPlato(evento, plato) {
    this.eplato = plato;
  }

  borrarPlato(event, plato) {
    this.platoService.borrarPlato(plato);
  }


  actualizarPlato() {
    if (this.imagenURL == undefined) {
      this.platoService.actualizarPlato(this.eplato);
      this.eplato = {} as Plato;
    }
    else {
      //this.subscriptionimgURL.unsubscribe();
      this.subscriptionimgURL=this.imagenURL.subscribe(params => {
        this.eplato.imagen = params;
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
  }

  reiniciarPlatos() {
    this.subscriptionplatos.unsubscribe();
    this.subscriptionplatos = this.platoService.getPlatos().subscribe(p => {
      this.platos = p;
    });


    this.imagenURL = undefined;
    this.uploaded = false;
  }

  // openModal(agregarPlato: TemplateRef<any>) {
  //   this.modalAgregar = this.modalService.show(agregarPlato);
  // }

  addExtra() {
    if (this.imagenURL == undefined) {
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
    if (this.imagenURL == undefined) {
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

}

