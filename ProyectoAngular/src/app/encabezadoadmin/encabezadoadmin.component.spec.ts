import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoadminComponent } from './encabezadoadmin.component';

describe('EncabezadoadminComponent', () => {
  let component: EncabezadoadminComponent;
  let fixture: ComponentFixture<EncabezadoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
