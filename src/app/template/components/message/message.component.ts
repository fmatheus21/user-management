import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validation';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
type VariantType = 'text' | 'outlined' | 'simple' | undefined;
type SizeType = 'small' | 'large' | undefined;

@Component({
  selector: 'app-message',
  imports: [CommonModule, MessageModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  @Input({ required: false }) severity: string = 'error';
  @Input({ required: false }) variant: VariantType = 'simple';
  @Input({ required: false }) size: SizeType = 'small';
  @Input() control!: FormControl;
  @Input() label!: string;

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
