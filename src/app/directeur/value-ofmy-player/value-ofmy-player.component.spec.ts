import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueOFMyPlayerComponent } from './value-ofmy-player.component';

describe('ValueOFMyPlayerComponent', () => {
  let component: ValueOFMyPlayerComponent;
  let fixture: ComponentFixture<ValueOFMyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueOFMyPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueOFMyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
