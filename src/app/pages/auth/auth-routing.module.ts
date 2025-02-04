import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RecoverComponent } from './recover/recover.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      title: 'Login',
      breadcrumb: 'Login',
    },
  },
  {
    path: 'recover',
    component: RecoverComponent,
    data: {
      title: 'Recuperar Senha',
      breadcrumb: 'Recuperar Senha',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
