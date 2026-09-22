import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-27',
  imports: [RouterLink],
  templateUrl: './animated-tabs.html',
})
export class AnimatedTabs {
  protected readonly tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];
  protected readonly activeIndex = signal(0);

  protected setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
