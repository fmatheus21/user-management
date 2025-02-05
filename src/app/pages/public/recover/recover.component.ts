import { Component } from '@angular/core';
import { IntroductionComponent } from '../../shared/introduction/introduction.component';
import { FormRecoverPasswordComponent } from '../../shared/form-recover-password/form-recover-password.component';

@Component({
  selector: 'app-recover',
  imports: [IntroductionComponent, FormRecoverPasswordComponent],
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css',
})
export class RecoverComponent {}
