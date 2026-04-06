import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  imports: [MatTooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
