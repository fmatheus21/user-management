import { Component } from '@angular/core';
import { FormSigninComponent } from '../../shared/form-signin/form-signin.component';
import { IntroductionComponent } from '../../shared/introduction/introduction.component';

@Component({
  selector: 'app-signin',
  imports: [FormSigninComponent, IntroductionComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
