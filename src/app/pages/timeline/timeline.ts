import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../project/projects.service';
import { MiniProject } from './mini-project/mini-project';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [RouterLink, MiniProject],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly projectsService = inject(ProjectsService);
  constructor() {}
}
