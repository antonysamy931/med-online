import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmaUserComponent } from './add-pharma-user.component';

describe('AddPharmaUserComponent', () => {
  let component: AddPharmaUserComponent;
  let fixture: ComponentFixture<AddPharmaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
