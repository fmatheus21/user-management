import { ControlValueAccessor } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseControlValueAccessor<T> implements ControlValueAccessor {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) autocomplete!: string;
  @Input({ required: true }) required = false;
  @Input({ required: true }) isReadOnly = false;
  @Input() errorCss!: { [klass: string]: any };
  @Input() classErrorCss!: string;

  innerValue!: T;

  get value(): T {
    return this.innerValue;
  }

  set value(v: T) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onChangeCallback: (_: any) => void = () => {};
  onTouchedCallback: () => void = () => {};

  writeValue(v: T): void {
    if (v !== this.innerValue) {
      this.value = v;
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
