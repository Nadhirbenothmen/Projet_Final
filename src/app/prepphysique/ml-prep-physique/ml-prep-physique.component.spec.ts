import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlPrepPhysiqueComponent } from './ml-prep-physique.component';

describe('MlPrepPhysiqueComponent', () => {
  let component: MlPrepPhysiqueComponent;
  let fixture: ComponentFixture<MlPrepPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlPrepPhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlPrepPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
