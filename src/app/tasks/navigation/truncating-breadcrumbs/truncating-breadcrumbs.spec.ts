import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatingBreadcrumbs } from './truncating-breadcrumbs';

describe('TruncatingBreadcrumbs', () => {
  let component: TruncatingBreadcrumbs;
  let fixture: ComponentFixture<TruncatingBreadcrumbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruncatingBreadcrumbs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruncatingBreadcrumbs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
