import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  constructor(private router: Router) {}

  readonly routes = {
    AUTH: {
      SIGNIN: '/public/auth/signin',
      RECOVER: '/public/auth/recover',
    },
    DASHBOARD: '/private/dashboard',
  };

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
