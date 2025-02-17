import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<string>(''); // Valor inicial vazio
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  setBreadcrumb(value: string): void {
    this.breadcrumbSubject.next(value);
  }
}
