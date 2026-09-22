import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-25',
  imports: [RouterLink],
  templateUrl: './responsive-navbar.html',
})
export class ResponsiveNavbar {
  protected readonly isMenuOpen = signal(false);
  protected readonly navLinks = ['Product', 'Pricing', 'Docs', 'Company'];

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
}
