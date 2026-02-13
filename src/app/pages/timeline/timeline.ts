import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  @ViewChild('canvas')
  canvasRef!: ElementRef;
  description = 'Welcome on my website. Discover my project trough the timelines';

  constructor() {}

  onHover(hovered: string) {
    if (hovered == 'black') {
      this.description = 'Main timeline';
    } else if (hovered == 'red') {
      this.description = 'Red Red Red Red Red Red timeline';
    } else {
      this.description = 'Welcome on my website. Discover my project trough the timelines';
    }
  }
}
