import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../../shared/introduction/introduction.component';
import { ScriptService } from '../../../core/service/script.service';
import { BaseFormComponent } from '../../../template/base-form/base-form.component';
import { MessagesService } from '../../../core/service/messages.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ButtonComponent } from '../../../template/components/button/button.component';
import { InputmaskComponent } from '../../../template/components/inputmask/inputmask.component';
import { PasswordComponent } from '../../../template/components/password/password.component';
import { FooterTermsComponent } from '../../shared/footer-terms/footer-terms.component';
import { MessageComponent } from '../../../template/components/message/message.component';

@Component({
  selector: 'app-signin',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    IntroductionComponent,
    InputTextModule,
    MessageModule,
    ButtonComponent,
    InputmaskComponent,
    PasswordComponent,
    FooterTermsComponent,
    MessageComponent,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent extends BaseFormComponent implements OnInit {
  constructor(
    private scriptService: ScriptService,
    private formBuilder: FormBuilder,
    messagesService: MessagesService
  ) {
    super(messagesService);
  }

  ngOnInit(): void {
    this.formValidation();
  }

  get controler() {
    return this.form.controls;
  }

  override submit() {
    console.log('O formulário foi validado.');
  }

  private formValidation() {
    this.form = this.formBuilder.group({
      username: [{ value: '', disabled: false }, [Validators.required]],
      password: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  private loadScript() {
    this.scriptService
      .loadExternalScript('./assets/js/plugins.bundle.js')
      .then(() => {
        console.log('plugins.bundle.js carregado.');
      })
      .catch(() => {});

    this.scriptService
      .loadExternalScript('./assets/js/scripts.bundle.js')
      .then(() => {
        console.log('scripts.bundle.js carregado.');
      })
      .catch(() => {});
  }
}
