import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedUsersComponent } from './med-users.component';

describe('MedUsersComponent', () => {
  let component: MedUsersComponent;
  let fixture: ComponentFixture<MedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
