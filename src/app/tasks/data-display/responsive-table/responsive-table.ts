import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Employee {
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On Leave';
}
@Component({
  selector: 'app-task-07',
  imports: [RouterLink],
  templateUrl: './responsive-table.html',
  styleUrl: './responsive-table.css',
})
export class ResponsiveTable {
  protected readonly employees: Employee[] = [
    { name: 'Sara Ahmed', role: 'Product Designer', department: 'Design', status: 'Active' },
    { name: 'Omar Khaled', role: 'Backend Engineer', department: 'Engineering', status: 'Active' },
    { name: 'Laila Hassan', role: 'HR Specialist', department: 'People', status: 'On Leave' },
    {
      name: 'Youssef Adel',
      role: 'Frontend Engineer',
      department: 'Engineering',
      status: 'Active',
    },
  ];
}
