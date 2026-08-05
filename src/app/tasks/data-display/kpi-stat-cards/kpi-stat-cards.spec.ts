import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiStatCards } from './kpi-stat-cards';

describe('KpiStatCards', () => {
  let component: KpiStatCards;
  let fixture: ComponentFixture<KpiStatCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiStatCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiStatCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
