import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInterface } from '../../project/projects.service';

@Component({
  selector: 'app-mini-project',
  templateUrl: './mini-project.html',
  styleUrl: './mini-project.scss',
  imports: [RouterLink, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniProject {
  @Input() project: ProjectInterface = {
    title: 'Project now found',
    contextKey: 'MAIN',
    description: 'Please check the url.',
    images: [{ url: './logo/GG_Racoon_Face.png' }],
  };
  @Input() color = '';

  constructor() {}

  ngOnInit() {}

  openProject(project: string) {
    const emptyLines = document.getElementsByClassName('project-line');
    console.log(emptyLines);
    for (let element of emptyLines) {
      element.classList.replace('line', 'hidden');
    }
    const miniProjects = document.getElementsByClassName('project-container');
    console.log(miniProjects);
    for (let element of miniProjects) {
      if (element.id == project) {
        element.classList.replace('line', 'expand');
      } else {
        element.classList.replace('line', 'hidden');
        console.log('removing', element);
      }
    }
  }

  changeSizeTimeline() {
    // @TODO: find all div which id include project.month  +"."+ project.year and change size by height of current div project-container
  }
}
