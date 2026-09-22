import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuColumn {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-task-28',
  imports: [RouterLink],
  templateUrl: './mega-menu.html',
})
export class MegaMenu {
  protected readonly columns: MenuColumn[] = [
    { title: 'Products', items: ['Analytics', 'Automation', 'Integrations'] },
    { title: 'Resources', items: ['Documentation', 'Guides', 'API Reference'] },
    { title: 'Company', items: ['About us', 'Careers', 'Blog'] },
  ];
}
