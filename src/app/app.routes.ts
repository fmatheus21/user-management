import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  //{ path: '', redirectTo: '/auth', pathMatch: 'full' },
];
