import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPricingTable } from './sticky-pricing-table';

describe('StickyPricingTable', () => {
  let component: StickyPricingTable;
  let fixture: ComponentFixture<StickyPricingTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyPricingTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyPricingTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
