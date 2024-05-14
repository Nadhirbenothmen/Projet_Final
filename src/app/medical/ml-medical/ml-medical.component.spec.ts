import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlMedicalComponent } from './ml-medical.component';

describe('MlMedicalComponent', () => {
  let component: MlMedicalComponent;
  let fixture: ComponentFixture<MlMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
