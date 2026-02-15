import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {
  project: ProjectInterface = {
    title: 'Project now found',
    description: 'Please check the url.',
    imageUrl: './logo/GG_Racoon_Body.png',
  };

  constructor(private route: ActivatedRoute) {
    const key = this.route.snapshot.paramMap.get('key');

    if (key) {
      const foundProject = projects.get(key);
      if (foundProject) {
        this.project = foundProject;
      }
    }
  }
}

export class ProjectInterface {
  title: string = '';
  date?: string;
  subtitle?: string;
  gitUrl?: string;
  siteUrl?: string;
  description: string = '';
  imageUrl: string = '';
}

export const projects = new Map<string, ProjectInterface>([
  [
    'scg',
    {
      title: 'Swiss Cyber grid',
      date: '12.2024',
      subtitle: 'Angular 18, mobile-friendly',
      gitUrl: 'https://github.com/GeeeHesso/AramisFrontend',
      siteUrl: 'https://swisscybergrid.iigweb.hevs.ch/',
      description:
        'The challenge of this project was to represent 2 maps highlighting the impact of a computer attack on Swiss power grid data. The project was carried out as part of my work at HES-SO, in the lab of Professor David Wannier. It was the first project I managed. Backend has been developed by Marc Gillioz.',
      imageUrl: './hes/swisscybergrid/mini.png',
    },
  ],
  [
    'vst',
    {
      title: 'Visualization tool',
      date: '07.2025',
      subtitle: 'Angular 20, mobile-friendly',
      description: 'TODO',
      imageUrl: './hes/visualization_tool/mockup.jpg',
    },
  ],
]);
