import { Component, signal, computed } from '@angular/core';
import { Task, TaskCategory } from '../core/models/task';
import { TASKS } from '../core/data/tasks.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly allTasks = signal<Task[]>(TASKS);
  protected readonly allCategories: TaskCategory[] = [
    'Layout & Structure',
    'Data Display',
    'State & Feedback',
    'Forms & Input',
    'Navigation',
    'Overlays & Layering',
    'Responsive & Adaptive',
    'Theming & Personalization',
    'Motion & Micro-interactions',
    'Accessibility & Inclusive Design',
  ];

  protected readonly activeCategories = signal<Set<TaskCategory>>(new Set());
  protected readonly filteredTasks = computed(() => {
    const active = this.activeCategories();
    if (active.size === 0) {
      return this.allTasks();
    }
    return this.allTasks().filter((task) => active.has(task.category));
  });
  protected toggleCategory(category: TaskCategory): void {
    const current = new Set(this.activeCategories());
    if (current.has(category)) {
      current.delete(category);
    } else {
      current.add(category);
    }
    this.activeCategories.set(current);
  }

  protected readonly completedCount = computed(() => {
    return this.allTasks().filter((task) => task.completed).length;
  });
}
