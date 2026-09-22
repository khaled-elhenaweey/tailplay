import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-26',
  imports: [RouterLink],
  templateUrl: './truncating-breadcrumbs.html',
})
export class TruncatingBreadcrumbs {
  protected readonly crumbs = [
    'Home',
    'Electronics',
    'Computers',
    'Laptops',
    'Gaming Laptops',
    'RTX 4070',
  ];
}
