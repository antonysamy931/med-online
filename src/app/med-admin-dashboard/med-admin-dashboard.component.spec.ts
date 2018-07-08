
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAdminDashboardComponent } from './med-admin-dashboard.component';

describe('MedAdminDashboardComponent', () => {
  let component: MedAdminDashboardComponent;
  let fixture: ComponentFixture<MedAdminDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedAdminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
