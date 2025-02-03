import { Component, Input, OnInit } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';

@Component({
  selector: 'app-inputmask',
  imports: [InputMask, FloatLabel],
  templateUrl: './inputmask.component.html',
  styleUrl: './inputmask.component.css',
})
export class InputmaskComponent implements OnInit {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) mask!: string;
  @Input({ required: true }) autocomplete!: string;
  @Input({ required: true }) label!: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
