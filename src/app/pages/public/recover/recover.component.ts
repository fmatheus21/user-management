import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../../shared/introduction/introduction.component';
import { ButtonComponent } from '../../../template/components/button/button.component';
import { InputmaskComponent } from '../../../template/components/inputmask/inputmask.component';
import { FooterTermsComponent } from '../../shared/footer-terms/footer-terms.component';
import { NavigatorService } from '../../../core/service/navigator.service';
import { BaseFormComponent } from '../../../template/base-form/base-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessagesService } from '../../../core/service/messages.service';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../../../template/components/message/message.component';

@Component({
  selector: 'app-recover',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroductionComponent,
    ButtonComponent,
    InputmaskComponent,
    FooterTermsComponent,
    MessageComponent,
  ],
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css',
})
export class RecoverComponent extends BaseFormComponent implements OnInit {
  constructor(
    private navigatorService: NavigatorService,
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
    });
  }

  redirect() {
    this.navigatorService.navigateTo(this.navigatorService.routes.AUTH.SIGNIN);
  }
}
