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
  private newAttribute: any = {};

    agregarColumna() {
        this.array.push(this.newAttribute)
        this.newAttribute = {};
    }

    eliminarColumna(index) {
        this.fieldArray.splice(index, 1);
    }

}
