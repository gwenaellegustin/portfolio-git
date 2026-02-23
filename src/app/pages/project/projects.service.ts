import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  colorHovered = '';
  constructor() {}

  getContext(key: string) {
    const foundContext = contexts.get(key);
    if (foundContext) {
      return foundContext;
    }
    return { context: key, color: 'black' };
  }
}

export class Url {
  url: string = '';
  text?: string = '';
}

export class ProjectInterface {
  title: string = '';
  context?: string = '';
  date?: string = '';
  subtitle?: string = '';
  urls?: Url[] = [];
  description: string = '';
  images: Url[] = [];
}

export class contextAndColor {
  context: string = '';
  color: string = '';
  link?: string;
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
  // @TODO: SDC (text of porfolioV4 - ECAL)
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
      link: '/mat',
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
      subtitle: 'UI/UX and dev (Angular 21)',

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
      urls: [
        {
          url: 'https://www.figma.com/deck/rgLFc7UclNYZbQsCvj6r8Z/2026.01-Shelves',
          text: 'Final presentation',
        },
      ],
      description:
        '<p>In order to conduct a UX study, we chose a technology used in the workplace or at school. I decided to rethink the user experience of the Windows file explorer in the context of higher education in order to meet the specific needs of students: less freedom and less navigation.</p> <p>File explorers can be both a pleasure and a pain, even if you like organising. The scope has been restricted to the Windows file manager for the purposes of the course in order to follow a specific use case. The interviews with users were extended to include a Mac and Linux user in order to gain additional perspectives.</p> Research methodology<ul><li>Define a research question : What influences the organisation of students’ academic file structure, how do they interact with it, and how do the features of File Manager impact said organisation ?</li>  <li>Semi-structured interviews with 9 participants, including a digital artefact walkthrough in the current and previous semester,  and a photo elicitation of other representations of architecture files</li>  <li>Experience sampling (~1 a week) with digital aterfact walkthrough</li>  <li>Analysis with a journey mapping (by participant and then merge). Five main stages were identified through the interviews: before the semester, during course (download a file), after class, during next course (re-acces the file), at the end of the semester</li>  <li>Find key insights</li>  <li>Additional methods: interview with an archivist, analysis of Google Drive and Figma</li></ul> <p>My proposal rethinks both the UI and the UX. In terms of the interface, the sidebar, which was only used for a few shortcuts, is no longer present. The shortcuts are located below the navigation bar, as in standard web browsers. The numerous display options have been restricted in order to encourage users to explore them. During interviews, some people complained about the absence of features that were actually available. In addition, access to the preview is highlighted, as this feature is a necessity for the vast majority of users.</p> <p>In regards to user experience, navigation and sorting were the main issues. The hierarchy that allowed for order required numerous clicks. The succession of folders  has been replaced by the creation of binders  and dividers. In addition, the status of binder remains unchanged during navigation, which improves efficiency. It is possible to group documents together in dividers with paper clips.Sorting is no longer based on name but on the order in which items were added, and files can be moved using drag and drop. This allows the name to regain its original function and eliminates the need for the prefixes previously used for sorting.</p>',
      images: [
        { url: '/2025-2027-master/s1-file-explorer/Drag.png' },
        {
          url: '/2025-2027-master/s1-file-explorer/2 Shelf - As you left it.mp4',
          text: 'As you left it',
        },
        {
          url: '/2025-2027-master/s1-file-explorer/Create a divider.png',
          text: 'Create a divider',
        },
        {
          url: '/2025-2027-master/s1-file-explorer/3 Shelf - Archive.mp4',
          text: 'Archive a course',
        },
        {
          url: '/2025-2027-master/s1-file-explorer/4 Shelf - Smaller menu.mp4',
          text: 'Smaller menu',
        },
        {
          url: '/2025-2027-master/s1-file-explorer/6 Folder - Archive and preview.mp4',
          text: 'To folder view and preview panel',
        },
      ],
    },
  ],
  [
    's1pp',
    {
      title: 'Pixel Perfect',
      context: 'DXD',
      date: '12.2025',
      subtitle: 'Interactive prototype Figma',
      urls: [
        {
          url: 'https://www.figma.com/proto/HRBdl3imYbH3SjBYAsWTw6/Pixel-Perfect---Gwenaelle-Gustin---Papiliorama?page-id=62%3A4554&node-id=4211-63407&viewport=241%2C235%2C0.02&t=IwCMsfXynocl9R8b-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4211%3A63407',
          text: 'My design (Figma prototype)',
        },
        {
          url: 'https://www.figma.com/proto/XAyeeEAJ1YghNGJWoiQuH0/V2-reproduce-website?page-id=2032%3A2584&node-id=2175-2602&p=f&viewport=118%2C319%2C0.04&t=91UQww6XdO1OfOfO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2175%3A2602',
          text: 'Reproduction (Figma prototype)',
        },
      ],
      description:
        "<p>In this course, we had to reinterpret the visuals and navigation of a museum website so that the site would reflect its unique universe. I chose the <a href='https://www.papiliorama.ch/en/' target='_blank'>Papiliorama site</a>. After analyzing the site map and reproducing the current website as a mock-up on Figma, I created a new navigation system and design system for this interactive prototype.</p><p>In my proposition, the page structure uses more organic shapes than simple rectangles, drawing inspiration from the outline of the dome and the triangles that compose it. Different colour variations are used to represent the diversity of the museum's exhibitions. The layout incorporates better highlighting of images.</p>",
      images: [
        { url: '/2025-2027-master/s1-papiliorama/PAGE Home.png' },
        { url: '/2025-2027-master/s1-papiliorama/demo.mp4', text: 'Video demo' },
        {
          url: '/2025-2027-master/s1-papiliorama/previous.png',
          text: 'Analyzed website website',
        },
        {
          url: '/2025-2027-master/s1-papiliorama/reproduction-2pages.png',
          text: 'Reproduction (left mockup, right screenshot)',
        },
        { url: '/2025-2027-master/s1-papiliorama/DSArtboard-1.png', text: 'Design system' },
        { url: '/2025-2027-master/s1-papiliorama/DSArtboard-2.png' },
        { url: '/2025-2027-master/s1-papiliorama/PAGE Visit.png', text: 'Pages' },
        { url: '/2025-2027-master/s1-papiliorama/PAGE Exhibits.png' },
        { url: '/2025-2027-master/s1-papiliorama/PAGE News.png' },
        { url: '/2025-2027-master/s1-papiliorama/PAGE Foundation.png' },
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
      description:
        '<p>During a week-long workshop, we were trained on Calvary by Antonin Waterkeyn. It was my first experience with animation.</p><p>We had to create animated covers for three albums (by the same artist or label) with vertical variations, as well as a horizontal format for a billboard. I chose to illustrate the work of Paul Sabin.</p>',
      images: [
        { url: '/2025-2027-master/s1-cavalry/3cover.png', text: 'Album sleeves' },
        {
          url: '/2025-2027-master/s1-cavalry/square-and-vertical-border.mp4',
          text: 'Spotify like animation',
        },
        { url: '/2025-2027-master/s1-cavalry/horizontal blue.mp4', text: 'Animated billboard' },
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
      urls: [{ url: 'https://up4it.io/', text: 'Website' }],
      description:
        "<p>Up4it is social network that aims to encourage people to organize real life activities with friends.<p/><p>I first joined the development team to improve my knowledge of Angular. Since late 2025, I have been contributing my knowledge, acquired during my master's degree, to UX and participating in UI.</p>",
      images: [{ url: '/2024-2026-up4it/up4it_logo.png' }, { url: '/2024-2026-up4it/figma2.png' }],
    },
  ],
  [
    'vst',
    {
      title: 'Visualization tool',
      context: 'HES',
      date: '07.2025',
      subtitle: 'Dev (Angular 20), UX',
      urls: [
        { url: 'https://citiwatts.eu/', text: 'Website' },
        {
          url: 'https://vlhtuleap.hevs.ch/plugins/git/git-eranet/Visualization_tool',
          text: 'Repository',
        },
      ],
      description:
        '<p>Visualization tool is a web application for displaying geographic data and performing complex operations on it. It is intended for researchers and energy specialists. The <a href="https://www.hevs.ch/easilab" target="_blank">team of David Wannier</a>, my former team, is responsible of the architecture and the development of the frontend and backend (not the calculation or the data).</p><p> As part of my work, I first conducted an expert review and then redesigned the user experience, mainly with regard to the toolbar. This was located in a panel on the left and was therefore no longer accessible when the data changed. I moved it to a movable bar and took the opportunity to unify the visuals. The map settings that were hidden by the panel on the right have also been moved to this bar.</p><p>This work also made it possible to organize the code (complete refactor) and update several versions of Angular, with the help of the team.</p><p> The code base is used by several projects. I implemented the architecture that allows for different interfaces (style and choice of data to display).</p>',
      images: [
        { url: '/2024-2025-visualization_tool/mockup.jpg' },
        { url: '/2024-2025-visualization_tool/old.png', text: 'Previous version' },
        { url: '/2024-2025-visualization_tool/review.mp4', text: 'Expert review' },
        {
          url: '/2024-2025-visualization_tool/multisite.png',
          text: 'One code base, several websites',
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
      urls: [
        { url: 'https://swisscybergrid.iigweb.hevs.ch/', text: 'Website' },
        {
          url: 'https://github.com/GeeeHesso/AramisFrontend',
          text: 'Repository',
        },
        {
          url: 'https://www.figma.com/design/Tdr2sBOWntirnrh9IL8XOr/ArmaSuisse?node-id=0-1&t=qc4e5vEFDJ3EWWgA-1',
          text: 'Mockups',
        },
      ],
      description:
        "<p>In order to present the work of <a href='https://etranselec.ch/' target='_blank'>Prof. Philippe Jacquod's team</a> on the impact of a computer attack on Swiss power grid data, this web application with two synchronized maps has been created. <p/> <p>It was the first project I was responsible for, but several of us on the team worked on the frontend. The backend has been developed by Marc Gillioz.</p> <p> I have worked diligently to make feedback instantaneous and have incorporated help elements for the more technical parts. The site is mobile-friendly. </p>",
      // @TODO: text of porfolioV4 - ECAL
      images: [
        { url: '/2024-swisscybergrid/mini.png' },
        { url: '/2024-swisscybergrid/swisscybergrid.mp4', text: 'Video demo' },
        { url: '/2024-swisscybergrid/results2.png' },
      ],
    },
  ],
  [
    'pan',
    {
      title: 'Pantagruel - Bachelor Thesis',
      context: 'BSC',
      date: '08.2023',
      subtitle: 'Dev (Angular 15), UX',
      urls: [
        { url: 'https://etranselec.ch/pantafrontend/', text: 'Website' },
        {
          url: 'https://github.com/GeeeHesso/pantafrontend',
          text: 'Repository',
        },
      ],
      description:
        '<p>PanTaGruEl is a dynamical grid model designed to investigate the propagation of disturbances in the continental European transmission grid, created by Prof. Philippe Jacquod (responsible of <a href="https://etranselec.ch/" target="_blank">Electrical Energy Efficiency Group - GEEE</a> ) and Laurent Pagnier. The aim of my Bachelor\'s thesis was to represent and manipulate PanTaGruEl data as efficiently as possible. The backend part has been developped in their team by Julian Fritzsch</p><p>The written work related to this application is available <a href="https://sonar.rero.ch/hesso/documents/326901" target="_blank">here</a> in French under the name "Développment d\'une interface user friendly pour le pilotage de simulation de réseau électrique intelligent".</p> <p>The application was designed to quickly test their algorithm in order to improve it, present it to demonstrate their result (and get more funding) and ideally use it to demonstrate flaws in various grids.</p> <p>It was important that a non-engineer would be able to use the platform but that engineers can activate more options. This need, coupled with the requirement to represent a variety of elements on the map and their characteristics led to the creation of this menu.</p> <p>The user has the possibility to modify grid elements from the map. Modified element, which appear on the side list, can be refocused on the map or reset.</p> ',
      images: [
        { url: '/2020-2023-bachelor/2023-pantagruel/mini.png' },
        { url: '/2020-2023-bachelor/2023-pantagruel/pantagruel courte 2.mp4', text: 'Demo' },
        // @TODO: details of settings
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
      urls: [
        { url: 'https://skraydd-birthday-2022.netlify.app/', text: 'Website' },
        {
          url: 'https://gitlab.com/gwenaelle.gustin/2023-anni-gaetan',
          text: 'Repository',
        },
      ],
      description:
        "<p>Website of small puzzles that can only be solved by the person for whom the site was created. I created this site for a friend as a time capsule with his current nickname, favorite video games, favorite quotes and favorite music.</p> <h4>Answers</h6> <p>Level 1:&nbsp;Only correct letters are accepted :</p><ul><li>Skraydd</li></ul><p>Level 2:&nbsp;you have to guess which game the screenshot was taken from, in order:</p><ul><li>Borderlands 3</li><li>Firewatch</li><li>Horizon Zero Dawn</li><li>Bioshock Infinite</li><li>Outlast 2</li><li>Everybody's Gone to the Rapture</li><li>The Outer Worlds</li><li>The Vanishing of Ethan Carter</li><li>Tomb raider</li><li>Minecraft</li></ul><p>Level 3:&nbsp;The central word column must form several specific quotations. The order of quotations in not important. Green means that the previous and next word are correct, blue that the next is correct and yellow that previous is correct.</p><ul><li>Dream - bigger</li><li>Apologies - but when - Claptrap - speaks - I feel - my brain - cells - committing - suicide - one by one</li><li>Everyone - is a cookie - from deep - inside and - cookies - are perfect. - So you too</li><li>Booker, - are you - afraid - of God? - No, but - I'm afraid - of you...</li></ul><p>Level 4 :&nbsp;8 songs are played at the same time. When you find an artist, the music of this artist is isolated for 3 seconds. When you find the title, the music is stopped</p><ul><li >Oh No (artist: Bring me the horizon)</li><li >One Night (artist 1: Matthew Koma, artist 2: Vicetone)</li><li >Beautiful Now (artsit: Zedd, artist 2: Jon Bellion)</li><li >Spotlight (artist 1: Marshmello, artist 2: Lil Peep)</li><li >With you, friends (long drive) (artist: SKRILLEX)</li><li >Don't Let Me Go (artist 1: Armin van Buuren, artist 2: Matluck)</li><li >The Spark (artist 1: Afrojack, artist 2: Spree Wilson)</li><li >Pizza (artist: Martin Garrix)</li></ul>",
      // @TODO: text of porfolioV4 - ECAL
      images: [{ url: '/2023-happy_birthday/mini.png' }],
    },
  ],
  // @TODO: tlearning (text of porfolioV4 - ECAL)
  [
    'vast',
    {
      title: 'VAST app',
      context: 'BSC',
      date: '06.2022',
      subtitle: 'Dev (react18), PWA',
      urls: [
        { url: 'https://vast-hes.netlify.app/', text: 'Website' },
        //@TODO: Private
        // {
        //   url: 'https://gitlab.com/gwenaelle.gustin/semestre7_vast',
        //   text: 'Repository',
        // },
      ],

      description:
        '<p>VAST, Visual Acuity Screening Tool, is a POC of visual test offline app, based on an idea of association <a href="https://www.instagram.com/escolhares">escolhared</a>. The aim is to be able to run visual tests in non-Internet environments with the minimum of hardware.The second screen, which opens during gameplay, has been designed for use with a touchscreen connected to the laptop via a long USB C cable.</p> <p>Team: <ul><li>Océane Tapparel: database and global app development </li><li>Matthieu Hagenbuch:  Landolt C size algorithm</li><li>Quentin Flament : scrum master and excel interaction</li><li>Me: offline tech, interaction between windows and global app development </li></ul></p>',
      images: [{ url: '/2020-2023-bachelor/2020-vast/mini.png' }],
      // @TODO: Photo of real usage
    },
  ],
  // @TODO: SwissVia (text of porfolioV4 - ECAL)
  [
    'droppy',
    {
      title: 'Droppy',
      context: 'BSC',
      date: '06.2021',
      subtitle: 'JavaScript',
      urls: [
        { url: 'https://letsdrop.gwengustin.ch/letsDrop.html', text: 'Website' },
        {
          url: 'https://github.com/gwenaellegustin/624-2_RIA_Let-sDrop',
          text: 'Repository',
        },
      ],
      description:
        '<p>As part of our JavaScript course, we had to create a game within an HTML and CSS website. My team made a game with levels featuring a drop of water that has to escape, whose life influences its size and speed. Each level was designed to bring a new challenge to the player.</p><p>I brought the idea of the gameplay, created the designs and took part in the coding.</p><p>Team: <ul><li>Marques Antony : Git manager and architect</li><li>Baechler Stéphanie : content and layout</li><li>Me: concept and design </li></ul> </p>',
      // @TODO: text of porfolioV4 - ECAL
      images: [
        { url: '/2020-2023-bachelor/2021-droppy/mini.png' },
        { url: '/2020-2023-bachelor/2021-droppy/droppy_short.mp4', text: 'Video demo' },
        { url: '/2020-2023-bachelor/2021-droppy/character.png', text: 'Characters' },
      ],
    },
  ],
  // @TODO: mam&co (text of porfolioV4 - ECAL)
  // @TODO: custom t-shirts (text of porfolioV4 - ECAL)
]);
