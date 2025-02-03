import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from '../../../template/components/button/button.component';
import { InputmaskComponent } from '../../../template/components/inputmask/inputmask.component';
import { PasswordComponent } from '../../../template/components/password/password.component';

@Component({
  selector: 'app-signin',
  imports: [RouterModule, InputTextModule, ButtonComponent, InputmaskComponent, PasswordComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
