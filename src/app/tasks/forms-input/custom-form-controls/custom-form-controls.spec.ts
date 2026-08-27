import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormControls } from './custom-form-controls';

describe('CustomFormControls', () => {
  let component: CustomFormControls;
  let fixture: ComponentFixture<CustomFormControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
