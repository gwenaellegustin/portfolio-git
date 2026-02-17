import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInterface, projects, ProjectsService } from '../project/projects.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [RouterLink, forwardRef(() => MiniProject)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly projectsService = inject(ProjectsService);
  constructor() {}
}

@Component({
  selector: 'app-min-project',
  templateUrl: './mini-project.html',
  styleUrl: './timeline.scss',
  imports: [RouterLink, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniProject {
  project: ProjectInterface = {
    title: 'Project now found',
    description: 'Please check the url.',
    images: [{ url: './logo/GG_Racoon_Face.png' }],
  };

  @Input() key = '';
  @Input() color = '';
  @Input() position = '';
  constructor() {}
  ngOnInit() {
    const foundProject = projects.get(this.key);
    if (foundProject) {
      this.project = foundProject;
    }
  }
}
