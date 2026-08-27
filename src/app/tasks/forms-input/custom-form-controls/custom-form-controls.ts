import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-21',
  imports: [RouterLink],
  templateUrl: './custom-form-controls.html',
  styleUrl: './custom-form-controls.css',
})
export class CustomFormControls {
  protected readonly notificationsEnabled = signal(true);
  protected toggleNotifications(): void {
    this.notificationsEnabled.update((value) => !value);
  }
}
