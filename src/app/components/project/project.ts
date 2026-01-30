import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  project  = input<ProjectInterface>();

  constructor() {}

}


export interface ProjectInterface {
   title: string ;
  description: string;
  imageUrl: string
}
