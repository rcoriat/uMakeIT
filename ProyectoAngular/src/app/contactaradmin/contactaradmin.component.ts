import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FireService } from '../services/fire.service';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contactaradmin',
  templateUrl: './contactaradmin.component.html',
  styleUrls: ['./contactaradmin.component.css']
})
export class ContactaradminComponent implements OnInit {

  constructor(public usrService: UserService, public contactoService: FireService) { }

  ngOnInit() {}



}
