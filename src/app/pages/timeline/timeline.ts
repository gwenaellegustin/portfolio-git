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
