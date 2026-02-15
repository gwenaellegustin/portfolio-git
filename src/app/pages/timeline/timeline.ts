import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInterface, projects } from '../project/project';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [RouterLink, forwardRef(() => MiniProject)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  projectsCopy = projects;
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
    imageUrl: './logo/GG_Racoon_Body.png',
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
