import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface OrderLine {
  item: string;
  qty: number;
  price: string;
}

interface Order {
  id: string;
  customer: string;
  lines: OrderLine[];
}
@Component({
  selector: 'app-task-06',
  imports: [RouterLink],
  templateUrl: './nested-subgrid.html',
  styleUrl: './nested-subgrid.css',
})
export class NestedSubgrid {
  protected readonly orders: Order[] = [
    {
      id: 'ORD-1001',
      customer: 'Alpha Studio',
      lines: [
        { item: 'UI Design Sprint', qty: 1, price: '$2,000' },
        { item: 'Icon Set License', qty: 3, price: '$45' },
      ],
    },
    {
      id: 'ORD-1002',
      customer: 'Beta Retail Group',
      lines: [
        { item: 'Component Library Setup', qty: 1, price: '$1,200' },
        { item: 'Extra Revision Round', qty: 2, price: '$150' },
        { item: 'Priority Support (1 month)', qty: 1, price: '$300' },
      ],
    },
  ];
}
