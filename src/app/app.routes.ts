import { Routes } from '@angular/router';
import { Me } from './pages/me/me';
import { Project } from './pages/project/project';
import { Timeline } from './pages/timeline/timeline';

export const routes: Routes = [
  { path: '', component: Timeline },
  {
    path: 'project/:key',
    component: Project,
  },
  {
    path: 'me',
    component: Me,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
