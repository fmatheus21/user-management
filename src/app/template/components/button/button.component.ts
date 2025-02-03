import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    /*if (this.type === 'submit') {
      this.icon = 'pi pi-check-circle';
      this.styleClass = 'p-button-info';
    } else if (this.type === 'cancel') {
      this.type = 'button';
      this.icon = 'pi pi-times-circle';
      this.styleClass = 'p-button-danger';
    }*/
  }
}
