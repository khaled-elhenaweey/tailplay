import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualHeightCards } from './equal-height-cards';

describe('EqualHeightCards', () => {
  let component: EqualHeightCards;
  let fixture: ComponentFixture<EqualHeightCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqualHeightCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualHeightCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
