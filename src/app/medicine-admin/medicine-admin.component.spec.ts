import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineAdminComponent } from './medicine-admin.component';

describe('MedicineAdminComponent', () => {
  let component: MedicineAdminComponent;
  let fixture: ComponentFixture<MedicineAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicineAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
