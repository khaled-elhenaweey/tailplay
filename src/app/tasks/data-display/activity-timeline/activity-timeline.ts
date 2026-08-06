import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TimelineEvent {
  title: string;
  time: string;
  description: string;
}

@Component({
  selector: 'app-task-12',
  imports: [RouterLink],
  templateUrl: './activity-timeline.html',
  styleUrl: './activity-timeline.css',
})
export class ActivityTimeline {
  protected readonly events: TimelineEvent[] = [
    {
      title: 'Order placed',
      time: '09:12 AM',
      description: 'Order #4821 was created by Sara Ahmed.',
    },
    {
      title: 'Payment confirmed',
      time: '09:14 AM',
      description: 'Payment of $240.00 was received.',
    },
    { title: 'Order shipped', time: '11:03 AM', description: 'Package handed to the courier.' },
    {
      title: 'Out for delivery',
      time: '02:47 PM',
      description: 'Courier is on the way to the address.',
    },
  ];
}
