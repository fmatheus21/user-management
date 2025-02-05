import { Component, OnInit } from '@angular/core';
import { FormSigninComponent } from '../../shared/form-signin/form-signin.component';
import { IntroductionComponent } from '../../shared/introduction/introduction.component';
import { ScriptService } from '../../../core/service/script.service';

@Component({
  selector: 'app-signin',
  imports: [FormSigninComponent, IntroductionComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit {
  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    //this.loadScript();
  }

  private loadScript() {
    this.scriptService
      .loadExternalScript('./assets/js/plugins.bundle.js')
      .then(() => {
        console.log('plugins.bundle.js carregado.');
      })
      .catch(() => {});

    this.scriptService
      .loadExternalScript('./assets/js/scripts.bundle.js')
      .then(() => {
        console.log('scripts.bundle.js carregado.');
      })
      .catch(() => {});
  }
}
