import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTabs } from './animated-tabs';

describe('AnimatedTabs', () => {
  let component: AnimatedTabs;
  let fixture: ComponentFixture<AnimatedTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
