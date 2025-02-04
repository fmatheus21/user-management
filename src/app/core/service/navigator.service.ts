import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  constructor(private router: Router) {}

  signin() {
    this.router.navigate(['auth/signin']);
    window.scrollTo(0, 0);
  }
}
