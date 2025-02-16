import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScriptService } from '../../core/service/script.service';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-private',
  imports: [RouterModule, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css',
})
export class PrivateComponent implements OnInit {
  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.loadScript();
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
