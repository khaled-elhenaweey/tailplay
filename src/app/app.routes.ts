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
  {
    path: 'tasks/14-empty-state',
    loadComponent: () =>
      import('./tasks/state-feedback/empty-state/empty-state').then((m) => m.EmptyState),
  },
  {
    path: 'tasks/15-error-page',
    loadComponent: () =>
      import('./tasks/state-feedback/error-page/error-page').then((m) => m.ErrorPage),
  },
  {
    path: 'tasks/16-toast-notifications',
    loadComponent: () =>
      import('./tasks/state-feedback/toast-notifications/toast-notifications').then(
        (m) => m.ToastNotifications,
      ),
  },
  {
    path: 'tasks/17-progress-indicators',
    loadComponent: () =>
      import('./tasks/state-feedback/progress-indicators/progress-indicators').then(
        (m) => m.ProgressIndicators,
      ),
  },
  {
    path: 'tasks/18-button-state-machine',
    loadComponent: () =>
      import('./tasks/state-feedback/button-state-machine/button-state-machine').then(
        (m) => m.ButtonStateMachine,
      ),
  },
  {
    path: 'tasks/19-multi-step-form',
    loadComponent: () =>
      import('./tasks/forms-input/multi-step-form/multi-step-form').then((m) => m.MultiStepForm),
  },
  {
    path: 'tasks/20-floating-labels',
    loadComponent: () =>
      import('./tasks/forms-input/floating-labels/floating-labels').then((m) => m.FloatingLabels),
  },
];
