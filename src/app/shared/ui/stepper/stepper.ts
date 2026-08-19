import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.html',
  styleUrl: './stepper.css',
})
export class Stepper {
  steps = input.required<string[]>();
  currentIndex = input.required<number>();
  protected stateFor(index: number): 'done' | 'active' | 'upcoming' {
    if (index < this.currentIndex()) return 'done';
    if (index === this.currentIndex()) return 'active';
    return 'upcoming';
  }
}
