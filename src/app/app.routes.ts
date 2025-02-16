import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public',
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'private',
    loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule),
  },
  { path: '**', redirectTo: 'error/not-found' },
];
