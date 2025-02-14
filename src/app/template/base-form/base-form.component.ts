import { Component, Directive } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessagesService } from '../../core/service/messages.service';

@Directive()
export abstract class BaseFormComponent {
  form: any = FormGroup;
  messagesService: MessagesService;

  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
  }

  abstract submit(): any;

  onSubmit() {
    if (this.form.valid) {
      this.submit();
    } else {
      this.messagesService.showError('Existem campos com erros.');
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log('Validando o campo ' + field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  resetar() {
    this.form.reset();
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  errorCss(field: string) {
    return {
      'is-invalid': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field),
    };
  }

  classErrorCss(field: string) {
    return this.isFieldValid(field) ? 'is-invalid' : '';
  }

  /*private verificaRequired(field: string) {
  return this.form.get(field)!.hasError('required') && (this.form.get(field)!.touched || this.form.get(field)!.dirty);
}

private checkValidEmail() {
  const fieldEmail = this.form.get('email')!;
  if (fieldEmail.errors) {
    return fieldEmail.errors['email'] && fieldEmail.touched;
  }
}*/
}
