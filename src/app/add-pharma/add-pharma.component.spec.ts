import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmaComponent } from './add-pharma.component';

describe('AddPharmaComponent', () => {
  let component: AddPharmaComponent;
  let fixture: ComponentFixture<AddPharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
