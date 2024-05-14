import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlCoachComponent } from './ml-coach.component';

describe('MlCoachComponent', () => {
  let component: MlCoachComponent;
  let fixture: ComponentFixture<MlCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
