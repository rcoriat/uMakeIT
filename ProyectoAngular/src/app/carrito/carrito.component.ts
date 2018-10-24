import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private array: Array<any> = [];
  private nuevo: any = {};

    agregarFila() {
        this.array.push(this.nuevo)

    }

    eliminarFila(index) {
        this.array.splice(index, 1);
    }

}
