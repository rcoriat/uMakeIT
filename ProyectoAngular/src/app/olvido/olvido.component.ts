import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./olvido.component.css']
})
export class OlvidoComponent implements OnInit {

  modalRef:BsModalRef;


  constructor(private modalService: BsModalService) { }

  openModal(contraenviada: TemplateRef<any>) {
    this.modalRef = this.modalService.show(contraenviada);
  }

  ngOnInit() {
  }

}
