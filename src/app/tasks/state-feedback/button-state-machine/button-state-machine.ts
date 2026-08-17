import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-task-18',
  imports: [RouterLink],
  templateUrl: './button-state-machine.html',
  styleUrl: './button-state-machine.css',
})
export class ButtonStateMachine {
  protected readonly state = signal<ButtonState>('idle');
  protected simulateSubmit(outcome: 'success' | 'error'): void {
    if (this.state() !== 'idle') {
      return;
    }

    this.state.set('loading');

    setTimeout(() => {
      this.state.set(outcome);
      setTimeout(() => this.state.set('idle'), 1800);
    }, 1200);
  }
}
