import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../services/user.service';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./olvido.component.css']
})
export class OlvidoComponent implements OnInit {

  modalRef: BsModalRef;
  resetPassword = false;
  email = '';
  error = '';

  constructor(private modalService: BsModalService, public olvidoService: UserService, public fireService: FireService) { }

  openModal(contraenviada: TemplateRef<any>) {
    this.modalRef = this.modalService.show(contraenviada);
  }

  ngOnInit() {
  }

  sendResetEmail() {
    console.log(this.email);
    this.olvidoService.resetPassword(this.email)
      .then(() => this.resetPassword = true)
      .catch(error => {
        this.error = error;
      });
      console.log(this.error);
  }
}
