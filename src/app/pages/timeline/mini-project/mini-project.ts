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
  @Input() idElement = '';

  constructor() {
    console.log(this.idElement);
  }

  ngOnInit() {}

  openProject() {
    // const miniProjects = document.getElementsByClassName('project-container');
    // console.log(miniProjects);
    // for (let element of miniProjects) {
    //   if (element.id == project) {
    //     element.classList.replace('line', 'expand');
    //   } else {
    //     element.classList.replace('line', 'hidden');
    //   }
    // }

    const cells = document.getElementsByClassName('cell');
    console.log(this.idElement);
    for (let element of cells) {
      if (element.id == this.idElement) {
        element.classList.add('opened');
      }
      if (element.id != this.idElement && !element.classList.contains('col3')) {
        element.classList.add('hidden');
      }
    }
  }

  changeSizeTimeline() {
    // @TODO: find all div which id include project.month  +"."+ project.year and change size by height of current div project-container
  }
}
