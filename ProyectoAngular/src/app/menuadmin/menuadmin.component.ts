import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FireService } from '../services/fire.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Plato } from '../models/plato';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

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
  public nplato = {} as Plato; // nuevo plato
  uploaded: boolean = false;
  public eplato: Plato; // plato de edicion

  constructor(public platoService: FireService, private afStorage: AngularFireStorage) {
    this.uploaded = false;
  }

  ngOnInit() {
      this.platoService.getPlatos().subscribe(platos => {
        this.platos = platos;
        console.log(this.platos);
      });
  }

  upload(event) {
    this.imagenURL = undefined;
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
    if(this.imagenURL == undefined){
      this.nplato.imagen = "https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85";
      this.platoService.agregarPlato(this.nplato);
    }
    else{
      this.imagenURL.subscribe(params => {
        this.nplato.imagen = params;
        this.platoService.agregarPlato(this.nplato);
      });
    }
    this.uploaded = false;
    this.imagenURL = undefined;
  }

  editarPlato(evento, plato) {
    this.eplato = plato;
  }

  borrarPlato(event, plato) {
    this.platoService.borrarPlato(plato);
  }



  actualizarPlato() {


    if(this.imagenURL == undefined){
      this.platoService.actualizarPlato(this.eplato);
    }
    else{
      this.imagenURL.subscribe(params => {
        this.eplato.imagen = params;
        this.platoService.actualizarPlato(this.eplato);
      });  
    }
   
    this.imagenURL = undefined;
    this.eplato = {} as Plato;
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

}

