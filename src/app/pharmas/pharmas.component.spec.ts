
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmasComponent } from './pharmas.component';

describe('PharmasComponent', () => {
  let component: PharmasComponent;
  let fixture: ComponentFixture<PharmasComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
