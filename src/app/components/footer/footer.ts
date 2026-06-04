import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  imports: [MatTooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  //@TODO:fix, no more working
  scrollToTop() {
    console.log('top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
