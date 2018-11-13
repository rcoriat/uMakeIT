import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { Usuario } from '../models/usuario';
import { Pedido } from '../models/pedido';
import { Subscription} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Plato } from '../models/plato';
import { Extra } from '../models/extra';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  isCollapsed = false;
  usuario: Usuario;
  historial: Pedido[];
  extras = [];

  constructor(public historialService: FireService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.historialService.db.collection('usuarios', ref => ref.where('correo', '==' , 'cguillen@unimet.edu.ve')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(usuarios => {
      this.usuario = usuarios[0];
      // tslint:disable-next-line:max-line-length
      this.historialService.db.collection('pedidos', ref => ref.where('cliente', '==', this.usuario.id)).snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Pedido;
          data.id = a.payload.doc.id;
          return data;
        });
      })).subscribe(pedidos => {
        this.historial = pedidos;
        for (let i = 0; i < this.historial.length; i++) {
          let fechatempstr = this.historial[i].fecha.toString();
          fechatempstr = fechatempstr.slice(18, fechatempstr.length - 1);
          fechatempstr = fechatempstr.split(', ', 1)[0];
          let fechatemp = new Date();
          fechatemp.setTime(+fechatempstr * 1000);
          this.historial[i].fecha = fechatemp;
        }
        this.sortHistorial();
        console.log(this.historial);
      });
    });
    this.historialService.db.collection('extras').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Extra;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(extras => {
      this.extras = extras;
    });
  }

  traerExtra(id: string) {
    for (const e of this.extras) {
      if (e.id === id) {
        return e;
      }
    }
    return null;
  }

  sortHistorial() {
    const len = this.historial.length;
    for (let i = 0; i < len - 1; i++) {
      let jmin = i;
      for (let j = i + 1; j < len; j++) {
        if (this.historial[j].fecha > this.historial[jmin].fecha) {
          jmin = j;
        }
      }
      if (jmin !== i) {
        const temp = this.historial[i];
        this.historial[i] = this.historial[jmin];
        this.historial[jmin] = temp;
      }
    }
  }

  repetirPedido(pedido: Pedido) {
    for (const p of pedido.platos) {
      p.numorden = null;
      this.historialService.agregarPlatoCarrito(p);
    }
  }

}
