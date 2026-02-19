import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectInterface, projects, ProjectsService } from './projects.service';

@Component({
  selector: 'app-project',
  imports: [NgClass, RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {
  private readonly _projectsService = inject(ProjectsService);
  project: ProjectInterface = {
    title: 'Project now found',
    description: 'Please check the url.',
    images: [{ url: './logo/GG_Racoon_Face.png' }],
  };
  color = 'black';
  context: any;

  constructor(private route: ActivatedRoute) {
    const key = this.route.snapshot.paramMap.get('key');

    if (key) {
      const foundProject = projects.get(key);
      if (foundProject) {
        this.project = foundProject;

        // Define color
        if (this.project.context) {
          const foundContext = this._projectsService.getContext(this.project.context);
          if (foundContext) {
            this.color = foundContext.color;
            this.context = foundContext.context;
          }
        }
      }
    }
  }
}
