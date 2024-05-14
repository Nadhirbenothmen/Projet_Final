import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCoachComponent } from './external-coach.component';

describe('ExternalCoachComponent', () => {
  let component: ExternalCoachComponent;
  let fixture: ComponentFixture<ExternalCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
