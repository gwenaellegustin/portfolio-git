import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [MatTooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly navbarService = inject(NavbarService);
  legend$ = this.navbarService.legend$;
}
