import { Routes } from '@angular/router';
import { Projects } from './pages/projects/projects';
import { Timeline } from './pages/timeline/timeline';

export const routes: Routes = [
  { path: '', component: Timeline },
  {
    path: 'project',
    component: Projects,
  },
];
