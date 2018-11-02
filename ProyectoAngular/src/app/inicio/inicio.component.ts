import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,AfterViewInit {

  prueba;
  fire;
  
  constructor(private elementRef: ElementRef, fire: FireService) { 
    this.prueba = fire.getPlatos();
    this.fire = fire;
  }

  crearPlato(){
    this.fire.agregarPlato('Quesillo', 'Tu tienes que probarlo, es un quesillo diferente y especial, deleitable. Llame ya y le mandaremos tambien un juguete con su cajita feliz este mes de Super Mario 64. MOTA approves. Beubs doesnt. Civil War', 450, 1, true, false, null, 'postre');
  }
  


  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }

}
