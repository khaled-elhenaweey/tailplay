import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndicators } from './progress-indicators';

describe('ProgressIndicators', () => {
  let component: ProgressIndicators;
  let fixture: ComponentFixture<ProgressIndicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressIndicators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressIndicators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
