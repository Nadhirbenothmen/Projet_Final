import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCoachComponent } from './match-coach.component';

describe('MatchCoachComponent', () => {
  let component: MatchCoachComponent;
  let fixture: ComponentFixture<MatchCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
