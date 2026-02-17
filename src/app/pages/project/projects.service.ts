import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getContext(key: string) {
    const foundContext = contexts.get(key);
    if (foundContext) {
      return foundContext;
    }
    return { context: key, color: 'black' };
  }
}

export class Images {
  url: string = '';
  legend?: string = '';
}

export class ProjectInterface {
  title: string = '';
  context?: string = '';
  date?: string = '';
  subtitle?: string = '';
  gitUrl?: string;
  siteUrl?: string;
  description: string = '';
  images: Images[] = [];
}

export class contextAndColor {
  context: string = '';
  color: string = '';
}

export const contexts = new Map<string, contextAndColor>([
  [
    'UP4',
    {
      context: 'Team member, Up4it',
      color: 'green',
    },
  ],
  [
    'DXD',
    {
      context: 'Master Digital Experience Design, ECAL',
      color: 'blue',
    },
  ],
  [
    'HES',
    {
      context: 'Research assistant, HES-SO Valais Wallis',
      color: 'cyan',
    },
  ],
  [
    'BSC',
    {
      context: 'Bachelor Business IT, HES-SO',
      color: 'cyan',
    },
  ],
  [
    'VDS',
    {
      context: 'IT assistant, Ville de Sion',
      color: 'red',
    },
  ],
  [
    'SIR',
    {
      context: 'Certification SIR, HES-SO',
      color: 'purple',
    },
  ],
  [
    'FTI',
    {
      context: 'Fitness trainer, FITSPRO',
      color: 'beige',
    },
  ],
  [
    'EPFL',
    {
      context: 'Bsc Computer Science (disenrolled), EPFL',
      color: 'beige',
    },
  ],

  [
    'MAT',
    {
      context: 'Maturité gymnasiale',
      color: 'orange',
    },
  ],
]);

export const projects = new Map<string, ProjectInterface>([
  [
    'gg',
    {
      title: 'This website',
      context: 'On my free time',
      date: '02.2026',
      subtitle: 'Design and dev (Angular 21)',
      description:
        'I wanted to create a website that would allow visitors to view projects in their context (school, work) and in chronological order. The principle of git, used in development, was perfect for this. So I used it as inspiration for this portfolio. The page with the timelines was created from scratch using HTML and CSS.',
      images: [{ url: '/gg.png' }],
    },
  ],
  [
    's1rc',
    {
      title: 'Reality Check',
      context: 'DXD',
      date: '01.2026',
      subtitle: 'UX research',
      description: '<p>....</p>',
      images: [{ url: '' }],
    },
  ],
  [
    's1pp',
    {
      title: 'Pixel Perfect',
      context: 'DXD',
      date: '12.2025',
      subtitle: 'Interactive prototype Figma',
      description: '<p>....</p>',
      images: [
        { url: './master/s1-papiliorama/PAGE Home.png' },
        { url: './master/s1-papiliorama/demo.mov', legend: 'Video demo' },
        { url: './master/s1-papiliorama/PAGE Visit.png', legend: 'Pages' },
        { url: './master/s1-papiliorama/PAGE Exhibits.png' },
        { url: './master/s1-papiliorama/PAGE News.png' },
        { url: './master/s1-papiliorama/PAGE Foundation.png' },
      ],
    },
  ],
  [
    's1mm',
    {
      title: 'Modular Mindset',
      context: 'DXD',
      date: '11.2025',
      subtitle: 'Cavalry Workshop',
      description: '<p>....</p>',
      images: [
        { url: '/master/s1-cavalry/1/cover.png' },
        { url: '/master/s1-cavalry/2/cover.png' },
        { url: '/master/s1-cavalry/3/cover.png' },
      ],
    },
  ],
  [
    'up4it',
    {
      title: 'Dev and design',
      context: 'UP4',
      date: 'Since 04.2024',
      subtitle: '',
      siteUrl: 'https://up4it.io/',
      description:
        "<p>Up4it is social network that aims to encourage people to organize real life activities with friends.<p/><p>I first joined the development team to improve my knowledge of Angular. Since late 2025, I have been contributing my knowledge, acquired during my master's degree, to UX and participating in UI.</p>",
      images: [{ url: './up4it/up4it_logo.png' }, { url: './up4it/figma2.png' }],
    },
  ],
  [
    'vst',
    {
      title: 'Visualization tool',
      context: 'HES',
      date: '07.2025',
      subtitle: 'Dev (Angular 20), UX',
      gitUrl: 'https://vlhtuleap.hevs.ch/plugins/git/git-eranet/Visualization_tool',
      siteUrl: 'https://citiwatts.eu/',
      description:
        '<p>Visualization tool is a web application for displaying geographic data and performing complex operations on it. It is intended for researchers and energy specialists. The team of David Wannier, my former team, is responsible of the architecture and the development of the frontend and backend (not the calculation or the data).</p><p> As part of my work, I first conducted an expert review and then redesigned the user experience, mainly with regard to the toolbar. This was located in a panel on the left and was therefore no longer accessible when the data changed. I moved it to a movable bar and took the opportunity to unify the visuals.</p><p>This work also made it possible to organize the code (complete refactor) and update several versions of Angular, with the help of the team.</p><p> The code base is used by several projects. I implemented the architecture that allows for different interfaces (style and choice of data to display).</p>',
      images: [
        { url: './hes/visualization_tool/mockup.jpg' },
        { url: './hes/visualization_tool/old.png', legend: 'Previous version' },
        { url: './hes/visualization_tool/expert_review.mov', legend: 'Expert review' },
        {
          url: './hes/visualization_tool/multisite.png',
          legend: 'One code base, several websites',
        },
      ],
    },
  ],
  [
    'scg',
    {
      title: 'Swiss Cyber grid',
      context: 'HES',
      date: '12.2024',
      subtitle: 'Dev (Angular 18), UX',
      gitUrl: 'https://github.com/GeeeHesso/AramisFrontend',
      siteUrl: 'https://swisscybergrid.iigweb.hevs.ch/',
      description:
        "<p>In order to present the work of Prof. Philippe Jacquod's team on the impact of a computer attack on Swiss power grid data, this web application with two synchronized maps has been created. <p/> <p>It was the first project I was responsible for, but several of us on the team worked on the frontend. The backend has been developed by Marc Gillioz.</p> <p> I have worked diligently to make feedback instantaneous and have incorporated help elements for the more technical parts. The site is mobile-friendly. </p>",
      images: [{ url: './hes/swisscybergrid/mini.png' }],
    },
  ],
  [
    'pan',
    {
      title: 'Pantagruel - Bachelor Thesis',
      context: 'BSC',
      date: '08.2023',
      subtitle: 'Dev (Angular 15), UX',
      gitUrl: 'https://github.com/GeeeHesso/pantafrontend',
      siteUrl: 'https://etranselec.ch/pantafrontend/',
      description:
        '<p>PanTaGruEl is a dynamical grid model designed to investigate the propagation of disturbances in the continental European transmission grid, created by Prof. Philippe Jacquod (responsible of Electrical Energy Efficiency Group - GEEE) and Laurent Pagnier. The aim of my Bachelor\'s thesis was to represent and manipulate PanTaGruEl data as efficiently as possible. The backend part has been developped in their team by Julian Fritzsch</p><p>The written work related to this application is available <a href="https://sonar.rero.ch/hesso/documents/326901" target="_blank">here</a> in French under the name "Développment d\'une interface user friendly pour le pilotage de simulation de réseau électrique intelligent" .</p> ',
      images: [
        { url: './bachelor/mini.png' },
        { url: './bachelor/pantagruel courte 2.mov', legend: 'Demo' },
      ],
    },
  ],
  [
    'hb',
    {
      title: 'Happy birthday !',
      context: 'On my free time',
      date: '02.2023',
      subtitle: 'Dev (react18), UX',
      gitUrl: 'https://gitlab.com/gwenaelle.gustin/2023-anni-gaetan',
      siteUrl: 'https://skraydd-birthday-2022.netlify.app/',
      description:
        "<p>Website of small puzzles that can only be solved by the person for whom the site was created. I created this site for a friend as a time capsule with his current nickname, favorite video games, favorite quotes and favorite music.</p> <h4>Answers</h6> <p>Level 1:&nbsp;Only correct letters are accepted :</p><ul><li>Skraydd</li></ul><p>Level 2:&nbsp;you have to guess which game the screenshot was taken from, in order:</p><ul><li>Borderlands 3</li><li>Firewatch</li><li>Horizon Zero Dawn</li><li>Bioshock Infinite</li><li>Outlast 2</li><li>Everybody's Gone to the Rapture</li><li>The Outer Worlds</li><li>The Vanishing of Ethan Carter</li><li>Tomb raider</li><li>Minecraft</li></ul><p>Level 3:&nbsp;The central word column must form several specific quotations. The order of quotations in not important. Green means that the previous and next word are correct, blue that the next is correct and yellow that previous is correct.</p><ul><li>Dream - bigger</li><li>Apologies - but when - Claptrap - speaks - I feel - my brain - cells - committing - suicide - one by one</li><li>Everyone - is a cookie - from deep - inside and - cookies - are perfect. - So you too</li><li>Booker, - are you - afraid - of God? - No, but - I'm afraid - of you...</li></ul><p>Level 4 :&nbsp;8 songs are played at the same time. When you find an artist, the music of this artist is isolated for 3 seconds. When you find the title, the music is stopped</p><ul><li >Oh No (artist: Bring me the horizon)</li><li >One Night (artist 1: Matthew Koma, artist 2: Vicetone)</li><li >Beautiful Now (artsit: Zedd, artist 2: Jon Bellion)</li><li >Spotlight (artist 1: Marshmello, artist 2: Lil Peep)</li><li >With you, friends (long drive) (artist: SKRILLEX)</li><li >Don't Let Me Go (artist 1: Armin van Buuren, artist 2: Matluck)</li><li >The Spark (artist 1: Afrojack, artist 2: Spree Wilson)</li><li >Pizza (artist: Martin Garrix)</li></ul>",
      images: [{ url: './2023-happybirthday/mini.png' }],
    },
  ],
  [
    'vast',
    {
      title: 'vast app',
      context: 'BSC',
      date: '06.2022',
      subtitle: 'react18, PWA',
      gitUrl: 'https://gitlab.com/gwenaelle.gustin/semestre7_vast',
      siteUrl: 'https://vast-hes.netlify.app/',
      description:
        'POC of visual test offline app, based on an idea of association escolhared. The aim is to be able to run visual tests in non-Internet environments with the minimum of hardware.The second screen, which opens during gameplay, has been designed for use with a touchscreen connected to the laptop via a long USB C cable. Team: Gwenaëlle Gustin (offline tech, interaction between windows and global app development), Océane Tapparel (database and global app development), Matthieu Hagenbuch (Landolt C size algorithm), Quentin Flament (scrum master and excel interaction)',
      images: [{ url: './bachelor/vast-mini.png' }],
    },
  ],
  [
    'droppy',
    {
      title: 'Droppy',
      context: 'BSC',
      date: '06.2021',
      subtitle: 'JavaScript',
      gitUrl: 'https://gitlab.com/hesantonymarques/604_3/624-2-ria',
      siteUrl: 'https://letsdrop.gwengustin.ch/letsDrop.html',
      description:
        'POC of visual test offline app, based on an idea of association escolhared. The aim is to be able to run visual tests in non-Internet environments with the minimum of hardware.The second screen, which opens during gameplay, has been designed for use with a touchscreen connected to the laptop via a long USB C cable. Team: Gwenaëlle Gustin (offline tech, interaction between windows and global app development), Océane Tapparel (database and global app development), Matthieu Hagenbuch (Landolt C size algorithm), Quentin Flament (scrum master and excel interaction). Mobile not supported',
      images: [{ url: './bachelor/droppy/mini.png' }],
    },
  ],
]);
