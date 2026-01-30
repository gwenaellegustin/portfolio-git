import { Component } from '@angular/core';
import { Project, ProjectInterface } from '../../components/project/project';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: ProjectInterface[] = [
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio built with Angular and Capacitor to showcase projects and blog posts.',
      imageUrl: '',
    },
    {
      title: 'Github',
      description: 'I worked hard to have this',
      imageUrl: 'github.png',
    },
    {
      title: 'Pantagruel',
      description: 'Bachelor thesis',
      imageUrl: '',
    },
    {
      title: 'Visualization tool',
      description: 'Same code base to deploy different web application',
      imageUrl: '',
    },
    {
      title: 'SwissCyberGrid',
      description:
        '... .... ... ... ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... . ... ... ... .. .. .... .. .. . . ...... .. .... .. .. .. . .. . . ... . .. .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... .... ..... ... .. .. . .. . .. ... .. ..... ... .. . .. ... ',
      imageUrl: '',
    },
    {
      title: 'Droppy',
      description: 'JS game',
      imageUrl: '',
    },
  ];
}
