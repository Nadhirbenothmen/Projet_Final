import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPopupComponent } from './inscription-popup.component';

describe('InscriptionPopupComponent', () => {
  let component: InscriptionPopupComponent;
  let fixture: ComponentFixture<InscriptionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
