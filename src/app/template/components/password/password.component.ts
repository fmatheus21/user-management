import { Component, Input, forwardRef } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../base-form/base-control-value-accessor';

@Component({
  selector: 'app-password',
  imports: [FormsModule, PasswordModule, FloatLabel],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent extends BaseControlValueAccessor<string> {
  @Input({ required: true }) toggleMask!: boolean;
  @Input({ required: true }) feedback!: boolean;
}
