import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
