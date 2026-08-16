import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type ToastSeverity = 'success' | 'warning' | 'error';

interface Toast {
  id: number;
  message: string;
  severity: ToastSeverity;
}

let nextToastId = 1;

@Component({
  selector: 'app-task-16',
  imports: [RouterLink],
  templateUrl: './toast-notifications.html',
  styleUrl: './toast-notifications.css',
})
export class ToastNotifications {
  protected readonly toasts = signal<Toast[]>([]);

  protected addToast(severity: ToastSeverity): void {
    const id = nextToastId++;
    const message =
      severity === 'success'
        ? 'Changes saved successfully.'
        : severity === 'warning'
          ? 'Your session will expire soon.'
          : 'Failed to upload the file.';

    this.toasts.update((current) => [...current, { id, message, severity }]);
    setTimeout(() => this.dismissToast(id), 4000);
  }

  protected dismissToast(id: number): void {
    this.toasts.update((current) => current.filter((toast) => toast.id !== id));
  }
}
