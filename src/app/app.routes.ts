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
  {
    path: 'tasks/07-responsive-table',
    loadComponent: () =>
      import('./tasks/data-display/responsive-table/responsive-table').then(
        (m) => m.ResponsiveTable,
      ),
  },
  {
    path: 'tasks/08-sticky-pricing-table',
    loadComponent: () =>
      import('./tasks/data-display/sticky-pricing-table/sticky-pricing-table').then(
        (m) => m.StickyPricingTable,
      ),
  },
  {
    path: 'tasks/09-dense-admin-table',
    loadComponent: () =>
      import('./tasks/data-display/dense-admin-table/dense-admin-table').then(
        (m) => m.DenseAdminTable,
      ),
  },
  {
    path: 'tasks/10-kpi-stat-cards',
    loadComponent: () =>
      import('./tasks/data-display/kpi-stat-cards/kpi-stat-cards').then((m) => m.KpiStatCards),
  },
  {
    path: 'tasks/11-kanban-board',
    loadComponent: () =>
      import('./tasks/data-display/kanban-board/kanban-board').then((m) => m.KanbanBoard),
  },
  {
    path: 'tasks/12-activity-timeline',
    loadComponent: () =>
      import('./tasks/data-display/activity-timeline/activity-timeline').then(
        (m) => m.ActivityTimeline,
      ),
  },
  {
    path: 'tasks/13-skeleton-loading',
    loadComponent: () =>
      import('./tasks/state-feedback/skeleton-loading/skeleton-loading').then(
        (m) => m.SkeletonLoading,
      ),
  },
];
