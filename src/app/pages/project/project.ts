import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectInterface, projects, ProjectsService } from './projects.service';

@Component({
  selector: 'app-project',
  imports: [NgClass],
  templateUrl: './project.html',
  styleUrl: './project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {
  readonly projectsService = inject(ProjectsService);
  project: ProjectInterface = {
    title: 'Project now found',
    context: '',
    description: 'Please check the url.',
    images: [{ url: './logo/GG_Racoon_Face.png' }],
  };
  projects = projects;
  color = 'black';
  context: any;
  key: any;

  constructor(private route: ActivatedRoute) {
    this.key = this.route.snapshot.paramMap.get('key');

    if (this.key) {
      const foundProject = projects.get(this.key);
      if (foundProject) {
        this.project = foundProject;

        // Define color
        if (this.project.context) {
          const foundContext = this.projectsService.getContext(this.project.context);
          if (foundContext) {
            this.color = foundContext.color;
            this.context = foundContext.context;
          }
        }
      }
    }
  }
}
