import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-signin',
  imports: [RouterModule, ButtonModule, Ripple],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
