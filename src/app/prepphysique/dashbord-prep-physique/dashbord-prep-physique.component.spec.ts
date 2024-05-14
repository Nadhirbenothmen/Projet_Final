import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordPrepPhysiqueComponent } from './dashbord-prep-physique.component';

describe('DashbordPrepPhysiqueComponent', () => {
  let component: DashbordPrepPhysiqueComponent;
  let fixture: ComponentFixture<DashbordPrepPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordPrepPhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordPrepPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
