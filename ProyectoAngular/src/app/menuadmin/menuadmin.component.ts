import { Component, OnInit } from '@angular/core';

import { FireService } from '../services/fire.service';

import { Plato } from '../models/plato';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit {

  isFirstDisabled = false;

  platos = [];
  nplato = {} as Plato;

  constructor(public platoService: FireService){ }

 ngOnInit(){
    this.platoService.getPlatos().subscribe(platos => {
      this.platos = platos;
      console.log(this.platos);
    });

 }

 addPlato(){
  console.log(this.nplato);
  
}

}

