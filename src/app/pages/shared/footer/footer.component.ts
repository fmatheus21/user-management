import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  copyright!: string;
  company!: string;

  ngOnInit(): void {
    this.initCopyright();
  }

  initCopyright() {
    var year = new Date().getFullYear();
    this.copyright = '2025 - ' + year + '©';
    this.company = 'Encoded Systems';
  }
}
