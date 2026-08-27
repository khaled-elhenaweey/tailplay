import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineValidation } from './inline-validation';

describe('InlineValidation', () => {
  let component: InlineValidation;
  let fixture: ComponentFixture<InlineValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
