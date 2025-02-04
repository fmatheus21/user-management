import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
type SeverityType =
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'
  | 'help'
  | 'primary'
  | 'secondary'
  | 'contrast'
  | null
  | undefined;

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) type!: 'button' | 'submit';
  @Input({ required: true }) label!: string;
  @Input({ required: true }) isReadOnly!: boolean;
  @Input({ required: true }) severity!: SeverityType;
  @Input({ required: true }) icon!: string;
  @Output() onClick = new EventEmitter<void>();

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit(); // Emite o evento para o componente pai
  }
}
