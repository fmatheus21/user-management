import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../base-form/base-control-value-accessor';

@Component({
  selector: 'app-inputmask',
  imports: [FormsModule, InputMask, FloatLabel],
  templateUrl: './inputmask.component.html',
  styleUrl: './inputmask.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputmaskComponent),
      multi: true,
    },
  ],
})
export class InputmaskComponent extends BaseControlValueAccessor<string> {
  @Input({ required: true }) mask!: string;
}
