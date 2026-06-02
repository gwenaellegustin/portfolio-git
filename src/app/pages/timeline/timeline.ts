import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectsService } from '../project/projects.service';
import { MiniProject } from './mini-project/mini-project';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [MiniProject],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly projectsService = inject(ProjectsService);
  constructor() {}
}

export class TimeLineInterface {
  title: string = '';
  yearStart: number = 0;
  monthStart: number = 0;
  yearEnd: number = 0;
  monthEnd: number = 0;
}
export const timeline = new Map<string, TimeLineInterface>([
  [
    'MAIN',
    {
      title: 'main',
      yearStart: 1996,
      monthStart: 6,
      yearEnd: 2026,
      monthEnd: 6,
    },
  ],
]);

function monthDiff(y1: number, m1: number, y2: number, m2: number) {
  var months;
  months = (y2 - y1) * 12;
  months -= m1;
  months += m2;
  return months <= 0 ? 0 : months;
}
