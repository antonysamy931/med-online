import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedUserComponent } from './add-med-user.component';

describe('AddMedUserComponent', () => {
  let component: AddMedUserComponent;
  let fixture: ComponentFixture<AddMedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
