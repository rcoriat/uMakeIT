import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaradminComponent } from './contactaradmin.component';

describe('ContactaradminComponent', () => {
  let component: ContactaradminComponent;
  let fixture: ComponentFixture<ContactaradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactaradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
