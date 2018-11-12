import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { Pedido } from '../models/pedido';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  pedidos = [];
  resultado: Pedido;
  numpedido: number;
  

  constructor(public pedidoService: FireService) { }

  ngOnInit() {}

  buscarPedido(){
    this.pedidoService.db.collection('pedidos', ref => ref.where('numorden', '==', this.numpedido) ).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Pedido;
        data.id = a.payload.doc.id;       
        return data;
      });
    })).subscribe(pedidos => {
      this.resultado = pedidos[0];
      console.log(this.resultado);
    });
  }
}
