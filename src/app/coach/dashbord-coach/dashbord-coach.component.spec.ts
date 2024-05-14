import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordCoachComponent } from './dashbord-coach.component';

describe('DashbordCoachComponent', () => {
  let component: DashbordCoachComponent;
  let fixture: ComponentFixture<DashbordCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
