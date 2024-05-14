import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumOfExternalPlayerComponent } from './sum-of-external-player.component';

describe('SumOfExternalPlayerComponent', () => {
  let component: SumOfExternalPlayerComponent;
  let fixture: ComponentFixture<SumOfExternalPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumOfExternalPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumOfExternalPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
