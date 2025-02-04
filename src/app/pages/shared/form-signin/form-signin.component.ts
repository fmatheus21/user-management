import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from '../../../template/components/button/button.component';
import { InputmaskComponent } from '../../../template/components/inputmask/inputmask.component';
import { PasswordComponent } from '../../../template/components/password/password.component';
import { FooterTermsComponent } from '../footer-terms/footer-terms.component';

@Component({
  selector: 'app-form-signin',
  imports: [
    RouterModule,
    InputTextModule,
    ButtonComponent,
    InputmaskComponent,
    PasswordComponent,
    FooterTermsComponent,
  ],
  templateUrl: './form-signin.component.html',
  styleUrl: './form-signin.component.css',
})
export class FormSigninComponent {}
