import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BreadcrumbService } from './core/service/breadcrumb.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getDeepestRoute(this.activatedRoute)),
        filter(route => route.outlet === 'primary')
      )
      .subscribe(route => {
        const title = route.snapshot.data['title'] || 'Gerenciamento de Usuários';
        const breadcrumb = route.snapshot.data['breadcrumb'];
        this.titleService.setTitle(title);
        this.breadcrumbService.setBreadcrumb(breadcrumb);
        console.log(route.snapshot.data);
      });
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
