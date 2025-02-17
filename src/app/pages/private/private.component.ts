import { Component, AfterViewInit, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScriptService } from '../../core/service/script.service';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ModalActivityComponent } from '../shared/modal-activity/modal-activity.component';
import { ModalNotificationComponent } from '../shared/modal-notification/modal-notification.component';

declare var KTApp: any;
declare var KTMenu: any;

@Component({
  selector: 'app-private',
  imports: [
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ModalActivityComponent,
    ModalNotificationComponent,
  ],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css',
})
export class PrivateComponent implements OnInit, AfterViewChecked {
  constructor(
    private scriptService: ScriptService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadScript();
    /*setTimeout(() => {
      const userMenu = document.getElementById('kt_header_user_menu_toggle');
      if (userMenu) {
        userMenu.click();
        userMenu.dispatchEvent(new Event('mouseover'));
      }
    }, 1000);*/
  }

  ngAfterViewChecked() {
    /*if (KTApp?.init) {
      setTimeout(() => {
        KTApp.init();
      }, 500);
    }*/

    if (KTMenu?.init) {
      setTimeout(() => {
        KTMenu.init();
      }, 500);
    }
  }

  private loadScript() {
    this.scriptService
      .loadExternalScript('./assets/js/plugins.bundle.js')
      .then(() => {
        console.log('plugins.bundle.js carregado.');
      })
      .catch(() => {
        console.log('Não foi possível carregar o script plugins.bundle.js.');
      });

    this.scriptService
      .loadExternalScript('./assets/js/scripts.bundle.js')
      .then(() => {
        console.log('scripts.bundle.js carregado.');
      })
      .catch(() => {
        console.log('Não foi possível carregar o script scripts.bundle.js.');
      });
  }
}
