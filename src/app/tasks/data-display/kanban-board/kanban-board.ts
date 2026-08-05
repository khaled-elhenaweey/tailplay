import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface KanbanCard {
  title: string;
  tag: string;
}

interface KanbanColumn {
  title: string;
  cards: KanbanCard[];
}

@Component({
  selector: 'app-task-11',
  imports: [RouterLink],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css',
})
export class KanbanBoard {
  protected readonly columns: KanbanColumn[] = [
    {
      title: 'To Do',
      cards: [
        { title: 'Design onboarding flow', tag: 'Design' },
        { title: 'Write API docs', tag: 'Docs' },
        { title: 'Fix mobile nav bug', tag: 'Bug' },
      ],
    },
    {
      title: 'In Progress',
      cards: [
        { title: 'Build settings page', tag: 'Frontend' },
        { title: 'Refactor auth service', tag: 'Backend' },
      ],
    },
    {
      title: 'In Review',
      cards: [{ title: 'Add dark mode toggle', tag: 'Frontend' }],
    },
    {
      title: 'Done',
      cards: [
        { title: 'Set up CI pipeline', tag: 'DevOps' },
        { title: 'Update dependencies', tag: 'Chore' },
        { title: 'Launch landing page', tag: 'Marketing' },
      ],
    },
  ];
}
