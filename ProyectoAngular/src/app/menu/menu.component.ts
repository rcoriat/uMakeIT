import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { PiedepaginaComponent } from '../piedepagina/piedepagina.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

}
