import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { map } from 'rxjs/operators';
import { Pedido } from '../models/pedido';
import { Extra } from '../models/extra';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  constructor(public pedidosService: FireService) { }

  pedidos = [];
  extras = [];
  clientes = [];

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.pedidosService.db.collection('pedidos', ref => ref.where('estado', '<' , 5)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(pedidos => {
      this.pedidos = pedidos;
      for (let i = 0; i < this.pedidos.length; i++) {
        let fechatempstr = this.pedidos[i].fecha.toString();
        fechatempstr = fechatempstr.slice(18, fechatempstr.length - 1);
        fechatempstr = fechatempstr.split(', ', 1)[0];
        let fechatemp = new Date();
        fechatemp.setTime(+fechatempstr * 1000);
        this.pedidos[i].fecha = fechatemp;
        /*
        // tslint:disable-next-line:max-line-length
        this.pedidosService.db.collection('usuarios', ref => ref.where('id', '==' , this.pedidos[i].cliente)).snapshotChanges().pipe(map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Usuario;
            data.id = a.payload.doc.id;
            return data;
          });
        })).subscribe(usuarios => {
          this.clientes = usuarios;
      });*/
      this.sortPedidos();
      console.log(this.pedidos);
      }
    });
    this.pedidosService.db.collection('extras').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Extra;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(extras => {
      this.extras = extras;
    });

    // tslint:disable-next-line:max-line-length
    this.pedidosService.db.collection('usuarios').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(usuarios => {
      this.clientes = usuarios;
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

  traerCliente(id: string) {
    for (const c of this.clientes) {
      if (c.id === id) {
        return c;
      }
    }
  }

  sortPedidos() {
    const len = this.pedidos.length;
    for (let i = 0; i < len - 1; i++) {
      let jmin = i;
      for (let j = i + 1; j < len; j++) {
        if (this.pedidos[j].fecha < this.pedidos[jmin].fecha) {
          jmin = j;
        }
      }
      if (jmin !== i) {
        const temp = this.pedidos[i];
        this.pedidos[i] = this.pedidos[jmin];
        this.pedidos[jmin] = temp;
      }
    }
  }

  actualizarPedido(pedido: Pedido) {
    pedido.estado = Number(pedido.estado.valueOf());
    console.log(pedido.estado);
    this.pedidosService.actualizarPedido(pedido);
  }

  estadoPedido(pedido: Pedido) {
    if (pedido.estado === 0) {
      return 'Pendiente';
    } else if (pedido.estado === 1) {
      return 'Verificado';
    } else if (pedido.estado === 2) {
      return 'En preparacion';
    } else if (pedido.estado === 3) {
      return 'Listo para salir';
    } else if (pedido.estado === 4) {
      return 'En camino';
    } else {
      return 'Entregado';
    }
  }



}
