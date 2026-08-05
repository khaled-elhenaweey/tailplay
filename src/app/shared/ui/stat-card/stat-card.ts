import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCard {
  label = input.required<string>();
  value = input.required<string>();
  trend = input<'up' | 'down' | 'flat'>('flat');
  trendLabel = input<string>('');
}
