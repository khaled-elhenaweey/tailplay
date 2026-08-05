import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatCard } from '../../../shared/ui/stat-card/stat-card';

interface Stat {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
  trendLabel: string;
}
@Component({
  selector: 'app-task-10',
  imports: [RouterLink, StatCard],
  templateUrl: './kpi-stat-cards.html',
  styleUrl: './kpi-stat-cards.css',
})
export class KpiStatCards {
  protected readonly stats: Stat[] = [
    { label: 'Total Revenue', value: '$48,200', trend: 'up', trendLabel: '12% vs last month' },
    { label: 'New Users', value: '1,204', trend: 'up', trendLabel: '4% vs last month' },
    { label: 'Bounce Rate', value: '32%', trend: 'down', trendLabel: '2% vs last month' },
    { label: 'Avg. Session', value: '3m 42s', trend: 'flat', trendLabel: 'No change' },
    { label: 'Customer Satisfaction', value: '89%', trend: 'up', trendLabel: '5% vs last month' },
    { label: 'Churn Rate', value: '5%', trend: 'down', trendLabel: '1% vs last month' },
    { label: 'Net Promoter Score', value: '72', trend: 'up', trendLabel: '3% vs last month' },
    { label: 'Conversion Rate', value: '2.5%', trend: 'up', trendLabel: '0.5% vs last month' },
    { label: 'Revenue per User', value: '$40', trend: 'up', trendLabel: '5% vs last month' },
    { label: 'Active Users', value: '8,500', trend: 'up', trendLabel: '10% vs last month' },
    { label: 'Customer Retention', value: '85%', trend: 'up', trendLabel: '3% vs last month' },
    { label: 'Support Tickets', value: '120', trend: 'down', trendLabel: '10% vs last month' },
  ];
}
