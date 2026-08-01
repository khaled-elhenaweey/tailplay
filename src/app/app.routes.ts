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
  {
    path: 'tasks/04-independent-scroll',
    loadComponent: () =>
      import('./tasks/layout/independent-scroll/independent-scroll').then(
        (m) => m.IndependentScroll,
      ),
  },
  {
    path: 'tasks/05-masonry-gallery',
    loadComponent: () =>
      import('./tasks/layout/masonry-gallery/masonry-gallery').then((m) => m.MasonryGallery),
  },
  {
    path: 'tasks/06-nested-subgrid',
    loadComponent: () =>
      import('./tasks/layout/nested-subgrid/nested-subgrid').then((m) => m.NestedSubgrid),
  },
];
