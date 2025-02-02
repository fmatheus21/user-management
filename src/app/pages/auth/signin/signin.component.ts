import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-signin',
  imports: [RouterModule, ButtonModule, InputTextModule, FloatLabel, InputMask, PasswordModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
