import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CommandItem {
  label: string;
  shortcut: string;
}
@Component({
  selector: 'app-task-24',
  imports: [RouterLink],
  templateUrl: './command-palette.html',
  styleUrl: './command-palette.css',
})
export class CommandPalette {
  protected readonly isOpen = signal(false);
  protected readonly highlightedIndex = signal(0);
  protected readonly commands: CommandItem[] = [
    { label: 'Go to Dashboard', shortcut: 'G D' },
    { label: 'Create New Project', shortcut: 'C P' },
    { label: 'Open Settings', shortcut: 'G S' },
    { label: 'Invite Team Member', shortcut: 'I T' },
    { label: 'Log Out', shortcut: '⇧ Q' },
  ];
  protected togglePalette(): void {
    this.isOpen.update((value) => !value);
  }
}
