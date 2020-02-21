import { Routes } from '@angular/router';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
];
