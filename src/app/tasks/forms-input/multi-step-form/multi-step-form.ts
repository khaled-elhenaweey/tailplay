import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stepper } from '../../../shared/ui/stepper/stepper';

@Component({
  selector: 'app-task-19',
  imports: [RouterLink, Stepper],
  templateUrl: './multi-step-form.html',
  styleUrl: './multi-step-form.css',
})
export class MultiStepForm {
  protected readonly steps = ['Account', 'Profile', 'Review'];
  protected readonly currentIndex = signal(0);

  protected goNext(): void {
    this.currentIndex.update((index) => Math.min(index + 1, this.steps.length - 1));
  }

  protected goBack(): void {
    this.currentIndex.update((index) => Math.max(index - 1, 0));
  }
}
