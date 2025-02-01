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
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/not-found' },
];
