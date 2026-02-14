import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  defaultDescription = 'Welcome on my website. Discover my project trough the timelines';
  description = this.defaultDescription;
  descriptionDXD = 'DXD description';
  descriptionHES = 'HES description';
  descriptionHESproject = 'Project HES';
  descriptionPM = 'PM description';
  descriptionUp4it = 'Up4it description';

  constructor() {}

  onHover(hovered: string) {
    let descriptionElement = document.getElementById('description');
    if (!descriptionElement) {
      return;
    }

    if (hovered == 'main') {
      this.description = 'Main timeline';
    } else if (hovered == 'dxd') {
      this.description = this.descriptionDXD;
      descriptionElement.setAttribute('style', 'color:#354be2');
    } else if (hovered == 'HES') {
      this.description = this.descriptionHES;
      descriptionElement.setAttribute('style', 'color:#4fa8e6');
    } else if (hovered == 'HES-project') {
      this.description = this.descriptionHESproject;
      descriptionElement.setAttribute('style', 'color:#4fa8e6');
    } else if (hovered == 'pm') {
      this.description = this.descriptionPM;
      descriptionElement.setAttribute('style', 'color:#ce5e5d');
    } else if (hovered == 'up4it') {
      this.description = this.descriptionUp4it;
      descriptionElement.setAttribute('style', 'color:#41d8ae');
    } else {
      this.description = this.defaultDescription;
      descriptionElement.setAttribute('style', 'color:black');
    }
  }
}
