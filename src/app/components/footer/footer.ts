import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
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
