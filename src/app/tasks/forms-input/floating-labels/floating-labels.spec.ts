import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLabels } from './floating-labels';

describe('FloatingLabels', () => {
  let component: FloatingLabels;
  let fixture: ComponentFixture<FloatingLabels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingLabels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingLabels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
