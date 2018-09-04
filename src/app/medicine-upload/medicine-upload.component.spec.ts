import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineUploadComponent } from './medicine-upload.component';

describe('MedicineUploadComponent', () => {
  let component: MedicineUploadComponent;
  let fixture: ComponentFixture<MedicineUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
