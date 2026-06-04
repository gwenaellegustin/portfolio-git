import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  defaultLegend = '';
  legend = this.defaultLegend;
  legend$ = signal<string>(this.defaultLegend);
}
