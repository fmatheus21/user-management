import { Component, Input, forwardRef } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PasswordComponent),
  multi: true,
};

@Component({
  selector: 'app-password',
  imports: [FormsModule, PasswordModule, FloatLabel],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  providers: [INPUT_FIELD_VALUE_ACCESSOR],
})
export class PasswordComponent implements ControlValueAccessor {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) toggleMask!: boolean;
  @Input({ required: true }) feedback!: boolean;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) autocomplete!: string;
  @Input({ required: true }) required = false;
  @Input({ required: true }) isReadOnly = false;
  @Input() errorCss!: { [klass: string]: any };
  @Input() classErrorCss!: string;
  innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onChangeCallback: (_: any) => void = () => {};
  onTouchedCallback: (_: any) => void = () => {};

  writeValue(v: any): void {
    if (v !== this.innerValue) {
      this.value = v;
      this.onChangeCallback(v);
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
