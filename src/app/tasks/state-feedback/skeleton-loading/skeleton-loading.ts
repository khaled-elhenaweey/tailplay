import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-13',
  imports: [RouterLink],
  templateUrl: './skeleton-loading.html',
  styleUrl: './skeleton-loading.css',
})
export class SkeletonLoading {
  protected readonly isLoading = signal(true);
  protected toggleLoading(): void {
    this.isLoading.update((value) => !value);
  }
}
