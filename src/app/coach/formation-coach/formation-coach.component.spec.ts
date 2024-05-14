import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCoachComponent } from './formation-coach.component';

describe('FormationCoachComponent', () => {
  let component: FormationCoachComponent;
  let fixture: ComponentFixture<FormationCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
