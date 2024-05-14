import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueOfExternalPlayerComponent } from './value-of-external-player.component';

describe('ValueOfExternalPlayerComponent', () => {
  let component: ValueOfExternalPlayerComponent;
  let fixture: ComponentFixture<ValueOfExternalPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueOfExternalPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueOfExternalPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
