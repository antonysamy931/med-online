
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaUsersComponent } from './pharma-users.component';

describe('PharmaUsersComponent', () => {
  let component: PharmaUsersComponent;
  let fixture: ComponentFixture<PharmaUsersComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
