import { Component, Input } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password',
  imports: [PasswordModule, FloatLabel],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) toggleMask!: boolean;
  @Input({ required: true }) feedback!: boolean;
  @Input({ required: true }) label!: string;
}
