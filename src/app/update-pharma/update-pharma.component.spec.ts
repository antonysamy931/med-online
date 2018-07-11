import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmaComponent } from './update-pharma.component';

describe('UpdatePharmaComponent', () => {
  let component: UpdatePharmaComponent;
  let fixture: ComponentFixture<UpdatePharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
