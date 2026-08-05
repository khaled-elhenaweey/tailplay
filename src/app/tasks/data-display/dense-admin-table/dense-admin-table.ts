import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LogEntry {
  id: string;
  user: string;
  action: string;
  timestamp: string;
}
@Component({
  selector: 'app-task-09',
  imports: [RouterLink],
  templateUrl: './dense-admin-table.html',
  styleUrl: './dense-admin-table.css',
})
export class DenseAdminTable {
  protected readonly logs: LogEntry[] = Array.from({ length: 14 }, (_, i) => ({
    id: `LOG-${1000 + i}`,
    user: i % 3 === 0 ? 'sara.ahmed' : i % 3 === 1 ? 'omar.khaled' : 'laila.hassan',
    action: i % 2 === 0 ? 'Updated project settings' : 'Deleted a task',
    timestamp: `2026-08-0${(i % 9) + 1} 14:${(10 + i).toString().padStart(2, '0')}`,
  }));
}
