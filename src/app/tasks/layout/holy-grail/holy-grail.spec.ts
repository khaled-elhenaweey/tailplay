import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyGrail } from './holy-grail';

describe('HolyGrail', () => {
  let component: HolyGrail;
  let fixture: ComponentFixture<HolyGrail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolyGrail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolyGrail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
