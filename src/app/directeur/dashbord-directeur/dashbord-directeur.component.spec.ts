import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordDirecteurComponent } from './dashbord-directeur.component';

describe('DashbordDirecteurComponent', () => {
  let component: DashbordDirecteurComponent;
  let fixture: ComponentFixture<DashbordDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordDirecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
