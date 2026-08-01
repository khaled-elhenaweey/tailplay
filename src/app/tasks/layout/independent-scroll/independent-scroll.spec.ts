import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentScroll } from './independent-scroll';

describe('IndependentScroll', () => {
  let component: IndependentScroll;
  let fixture: ComponentFixture<IndependentScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndependentScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndependentScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
