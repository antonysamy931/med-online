import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmaUserComponent } from './update-pharma-user.component';

describe('UpdatePharmaUserComponent', () => {
  let component: UpdatePharmaUserComponent;
  let fixture: ComponentFixture<UpdatePharmaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePharmaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
