import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInterface, projects, ProjectsService } from '../../project/projects.service';

@Component({
  selector: 'app-min-project',
  templateUrl: './mini-project.html',
  styleUrl: '../timeline.scss',
  imports: [RouterLink, NgClass],
})
export class MiniProject {
  public readonly projectsService = inject(ProjectsService);
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

  onHover(hovered: boolean) {
    console.log('boolean', hovered);
    console.log('color', this.color);
    console.log('hoveredKey', this.projectsService.colorHovered);
    if (hovered) {
      this.projectsService.colorHovered = this.color;
    } else {
      this.projectsService.colorHovered = '';
    }

    // console.log(this.key);
    // let descriptionElement = document.getElementById('description');
    // if (!descriptionElement) {
    //   return;
    // }
  }
}
