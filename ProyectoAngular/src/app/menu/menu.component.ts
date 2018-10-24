import { Component, OnInit, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  modalRef: BsModalRef;

  constructor(private elementRef: ElementRef, private modalService:BsModalService) { }

  ngOnInit() { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }

  openModal(verplato: TemplateRef<any>) {
    this.modalRef = this.modalService.show(verplato);
  }

}
