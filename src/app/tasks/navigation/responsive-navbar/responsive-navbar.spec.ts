import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveNavbar } from './responsive-navbar';

describe('ResponsiveNavbar', () => {
  let component: ResponsiveNavbar;
  let fixture: ComponentFixture<ResponsiveNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
