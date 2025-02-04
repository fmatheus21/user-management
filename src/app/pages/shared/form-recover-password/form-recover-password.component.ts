import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../template/components/button/button.component';
import { InputmaskComponent } from '../../../template/components/inputmask/inputmask.component';
import { FooterTermsComponent } from '../footer-terms/footer-terms.component';
import { NavigatorService } from '../../../core/service/navigator.service';

@Component({
  selector: 'app-form-recover-password',
  imports: [ButtonComponent, InputmaskComponent, FooterTermsComponent],
  templateUrl: './form-recover-password.component.html',
  styleUrl: './form-recover-password.component.css',
})
export class FormRecoverPasswordComponent implements OnInit {
  constructor(private navigator: NavigatorService) {}

  ngOnInit(): void {}

  redirect() {
    this.navigator.signin();
  }
}
