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
    imageUrl: './logo/GG_Racoon_Face.png',
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
    'up4',
    {
      title: 'Up4IT',
      date: 'Since 04.2024',
      subtitle: 'Dev and design',
      siteUrl: 'https://up4it.io/',
      description:
        'A social network that aims to encourage people to organize real life activities with friends. ',
      imageUrl: './up4it/up4it_logo.png',
    },
  ],
  [
    'vst',
    {
      title: 'Visualization tool',
      date: '07.2025',
      subtitle: 'Dev Angular 20, UX',
      gitUrl: 'https://vlhtuleap.hevs.ch/plugins/git/git-eranet/Visualization_tool',
      siteUrl: 'https://citiwatts.eu/',
      description:
        'Visualization tool is a web application for displaying geographic data and performing complex operations on it. It is intended for researchers and energy specialists. It is maintained by HES-SO. As part of my work, I refactored the frontend and redesigned the user experience, mainly with regard to the toolbar. This was located in a panel on the left and was therefore no longer accessible when the data changed. I moved it to a movable bar and took the opportunity to unify the visuals. The code base is used by several projects. I implemented the architecture that allows for different interfaces (style and choice of data to display).',
      imageUrl: './hes/visualization_tool/mockup.jpg',
    },
  ],
  [
    'scg',
    {
      title: 'Swiss Cyber grid',
      date: '12.2024',
      subtitle: 'Dev Angular 18, UX',
      gitUrl: 'https://github.com/GeeeHesso/AramisFrontend',
      siteUrl: 'https://swisscybergrid.iigweb.hevs.ch/',
      description:
        'The challenge of this project was to represent 2 maps highlighting the impact of a computer attack on Swiss power grid data. The project was carried out as part of my work at HES-SO, in the lab of Professor David Wannier. It was the first project I managed. Backend has been developed by Marc Gillioz.',
      imageUrl: './hes/swisscybergrid/mini.png',
    },
  ],
  [
    'pa',
    {
      title: 'Pantagruel - Bachelor Thesis',
      date: '08.2023',
      subtitle: 'Dev Angular 15, UX',
      gitUrl: 'https://github.com/GeeeHesso/pantafrontend',
      siteUrl: 'https://etranselec.ch/pantafrontend/',
      description:
        'The aim of my Bachelor\'s thesis was to represent and manipulate PanTaGruEl data as efficiently as possible. PanTaGruEl is a dynamical grid model designed to investigate the propagation of disturbances in the continental European transmission grid, created by Prof. Philippe Jacquod (responsible of Electrical Energy Efficiency Group - GEEE) and Laurent Pagnier. Backend written by Julian Fritzsch. The written work related to this application is available in French under the name "Développment d\'une interface user friendly pour le pilotage de simulation de réseau électrique intelligent".',
      imageUrl: './bachelor/mini.png',
    },
  ],
  [
    'hb',
    {
      title: 'Happy birthday !',
      date: '02.2023',
      subtitle: 'Dev react18, UX',
      gitUrl: 'https://gitlab.com/gwenaelle.gustin/2023-anni-gaetan',
      siteUrl: 'https://skraydd-birthday-2022.netlify.app/',
      description:
        'Website of small puzzles that can only be solved by the person for whom the site was created. I created this site for a friend as a time capsule with his current nickname, favorite video games, favorite quotes and favorite music.',
      // @TODO: answer
      imageUrl: './2023-happybirthday/mini.png',
    },
  ],
  [
    'vast',
    {
      title: 'VAST app',
      date: '06.2022',
      subtitle: 'react18, PWA',
      gitUrl: 'https://gitlab.com/gwenaelle.gustin/semestre7_vast',
      siteUrl: 'https://vast-hes.netlify.app/',
      description:
        'POC of visual test offline app, based on an idea of association escolhared. The aim is to be able to run visual tests in non-Internet environments with the minimum of hardware.The second screen, which opens during gameplay, has been designed for use with a touchscreen connected to the laptop via a long USB C cable. Team: Gwenaëlle Gustin (offline tech, interaction between windows and global app development), Océane Tapparel (database and global app development), Matthieu Hagenbuch (Landolt C size algorithm), Quentin Flament (scrum master and excel interaction)',
      imageUrl: './bachelor/vast-mini.png',
    },
  ],
  [
    'drop',
    {
      title: 'Droppy',
      date: '06.2021',
      subtitle: 'JavaScript',
      gitUrl: 'https://gitlab.com/hesantonymarques/604_3/624-2-ria',
      siteUrl: 'https://letsdrop.gwengustin.ch/letsDrop.html',
      description:
        'POC of visual test offline app, based on an idea of association escolhared. The aim is to be able to run visual tests in non-Internet environments with the minimum of hardware.The second screen, which opens during gameplay, has been designed for use with a touchscreen connected to the laptop via a long USB C cable. Team: Gwenaëlle Gustin (offline tech, interaction between windows and global app development), Océane Tapparel (database and global app development), Matthieu Hagenbuch (Landolt C size algorithm), Quentin Flament (scrum master and excel interaction). Mobile not supported',
      imageUrl: './bachelor/droppy/mini.png',
    },
  ],
]);
