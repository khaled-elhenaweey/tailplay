import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-17',
  imports: [RouterLink],
  templateUrl: './progress-indicators.html',
  styleUrl: './progress-indicators.css',
})
export class ProgressIndicators {
  protected readonly percent = signal(65);
  protected readonly steps = ['Account', 'Profile', 'Preferences', 'Done'];
  protected readonly currentStep = signal(2);

  protected setPercent(value: number): void {
    this.percent.set(value);
  }
}
