import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlDirecteurComponent } from './ml-directeur.component';

describe('MlDirecteurComponent', () => {
  let component: MlDirecteurComponent;
  let fixture: ComponentFixture<MlDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlDirecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
