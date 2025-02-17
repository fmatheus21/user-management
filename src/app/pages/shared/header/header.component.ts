import { Component } from '@angular/core';
import { ToggleUserComponent } from '../toggle-user/toggle-user.component';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { ToggleShortcutComponent } from '../toggle-shortcut/toggle-shortcut.component';
import { ToggleNotificationComponent } from '../toggle-notification/toggle-notification.component';
import { ToggleSearchComponent } from '../toggle-search/toggle-search.component';
import { ToggleActivityComponent } from '../toggle-activity/toggle-activity.component';

@Component({
  selector: 'app-header',
  imports: [
    ToggleUserComponent,
    ToggleThemeComponent,
    ToggleShortcutComponent,
    ToggleNotificationComponent,
    ToggleSearchComponent,
    ToggleActivityComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
