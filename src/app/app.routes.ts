import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { DashboardLayout } from './shared/layout/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayout,

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
      { path: '**', component: Dashboard, title: 'Dashboard' },
    ],
  },
];
