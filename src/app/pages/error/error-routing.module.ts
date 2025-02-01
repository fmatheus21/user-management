import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotfoundComponent,
    data: {
      title: 'Página não encontrada',
      breadcrumb: 'Página não encontrada',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
