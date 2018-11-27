import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { setOffsetToUTC } from 'ngx-bootstrap/chronos/units/offset';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  email = '';
  pw = '';

  constructor(private elementRef: ElementRef, public usrService: UserService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }

  iniciarSesion() {
    console.log(this.email);
    console.log(this.pw);
    this.usrService.login(this.email, this.pw);
  }

}
