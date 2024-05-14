import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalFitnessComponent } from './external-fitness.component';

describe('ExternalFitnessComponent', () => {
  let component: ExternalFitnessComponent;
  let fixture: ComponentFixture<ExternalFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalFitnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
