
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedOnlineNavbarComponent } from './med-online-navbar.component';

describe('MedOnlineNavbarComponent', () => {
  let component: MedOnlineNavbarComponent;
  let fixture: ComponentFixture<MedOnlineNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedOnlineNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedOnlineNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
