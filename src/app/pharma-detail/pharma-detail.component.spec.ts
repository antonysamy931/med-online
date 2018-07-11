import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaDetailComponent } from './pharma-detail.component';

describe('PharmaDetailComponent', () => {
  let component: PharmaDetailComponent;
  let fixture: ComponentFixture<PharmaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
