import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { SigninComponent } from './signin/signin.component';
import { RecoverComponent } from './recover/recover.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/signin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'auth/signin',
        component: SigninComponent,
        data: {
          title: 'Login',
          breadcrumb: 'Login',
        },
      },
      {
        path: 'auth/recover',
        component: RecoverComponent,
        data: {
          title: 'Recuperar Senha',
          breadcrumb: 'Recuperar Senha',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
