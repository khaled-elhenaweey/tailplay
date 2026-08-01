import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'tasks/01-holy-grail',
    loadComponent: () => import('./tasks/layout/holy-grail/holy-grail').then((m) => m.HolyGrail),
  },
  {
    path: 'tasks/02-bento-grid',
    loadComponent: () => import('./tasks/layout/bento-grid/bento-grid').then((m) => m.BentoGrid),
  },
  {
    path: 'tasks/03-equal-height-cards',
    loadComponent: () =>
      import('./tasks/layout/equal-height-cards/equal-height-cards').then(
        (m) => m.EqualHeightCards,
      ),
  },
];
