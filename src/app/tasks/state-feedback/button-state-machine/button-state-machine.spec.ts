import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStateMachine } from './button-state-machine';

describe('ButtonStateMachine', () => {
  let component: ButtonStateMachine;
  let fixture: ComponentFixture<ButtonStateMachine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStateMachine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStateMachine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
