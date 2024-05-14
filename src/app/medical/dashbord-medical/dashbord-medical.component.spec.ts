import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMedicalComponent } from './dashbord-medical.component';

describe('DashbordMedicalComponent', () => {
  let component: DashbordMedicalComponent;
  let fixture: ComponentFixture<DashbordMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
