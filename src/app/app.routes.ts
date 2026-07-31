import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'tasks/01-holy-grail',
    loadComponent: () => import('./tasks/layout/01-holy-grail/holy-grail').then((m) => m.HolyGrail),
  },
];
