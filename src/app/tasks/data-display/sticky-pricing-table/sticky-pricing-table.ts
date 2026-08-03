import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
  name: string;
  starter: string;
  pro: string;
  team: string;
  enterprise: string;
}
@Component({
  selector: 'app-task-08',
  imports: [],
  templateUrl: './sticky-pricing-table.html',
  styleUrl: './sticky-pricing-table.css',
})
export class StickyPricingTable {
  protected readonly plans = ['Starter', 'Pro', 'Team', 'Enterprise'];

  protected readonly features: Feature[] = [
    { name: 'Projects', starter: '3', pro: '20', team: 'Unlimited', enterprise: 'Unlimited' },
    { name: 'Team members', starter: '1', pro: '5', team: '25', enterprise: 'Unlimited' },
    { name: 'Storage', starter: '2 GB', pro: '50 GB', team: '250 GB', enterprise: 'Custom' },
    { name: 'API access', starter: '—', pro: '✓', team: '✓', enterprise: '✓' },
    { name: 'Priority support', starter: '—', pro: '—', team: '✓', enterprise: '✓' },
    { name: 'SSO / SAML', starter: '—', pro: '—', team: '—', enterprise: '✓' },
  ];
}
