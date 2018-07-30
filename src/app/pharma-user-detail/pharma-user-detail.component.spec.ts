import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaUserDetailComponent } from './pharma-user-detail.component';

describe('PharmaUserDetailComponent', () => {
  let component: PharmaUserDetailComponent;
  let fixture: ComponentFixture<PharmaUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
