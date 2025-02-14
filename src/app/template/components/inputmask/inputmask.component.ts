import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputmaskComponent),
  multi: true,
};

@Component({
  selector: 'app-inputmask',
  imports: [FormsModule, InputMask, FloatLabel],
  templateUrl: './inputmask.component.html',
  styleUrl: './inputmask.component.css',
  providers: [INPUT_FIELD_VALUE_ACCESSOR],
})
export class InputmaskComponent implements ControlValueAccessor {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) mask!: string;
  @Input({ required: true }) autocomplete!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) required = false;
  @Input({ required: true }) isReadOnly = false;
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
