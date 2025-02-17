import { Component, OnInit } from '@angular/core';
import { ToggleUserComponent } from '../toggle-user/toggle-user.component';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { ToggleShortcutComponent } from '../toggle-shortcut/toggle-shortcut.component';
import { ToggleNotificationComponent } from '../toggle-notification/toggle-notification.component';
import { BreadcrumbService } from '../../../core/service/breadcrumb.service';

@Component({
  selector: 'app-header',
  imports: [ToggleUserComponent, ToggleThemeComponent, ToggleShortcutComponent, ToggleNotificationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  breadcrumb: string = '';

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.subscribe(value => {
      this.breadcrumb = value;
    });
  }
}
