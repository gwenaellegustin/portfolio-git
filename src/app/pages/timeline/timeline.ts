import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectInterface, DataService, timeline, timelines } from './data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly projectsService = inject(DataService);
  timelines = timelines;
  dateMap = this.projectsService.dateMap;
  projects = this.projectsService.projects;

  constructor() {}

  hoverProject(projectKey: string) {
    const projects = document.getElementsByClassName('project-container');
    for (let element of projects) {
      if (element.id == projectKey) {
        element.classList.add('hover');
      }
    }

    const commit = document.getElementById('commit-' + projectKey);
    console.log(commit);
    commit?.classList.add('hover');
  }

  leaveProject(projectKey: string) {
    const projects = document.getElementsByClassName('project-container');
    for (let element of projects) {
      if (element.id == projectKey) {
        element.classList.remove('hover');
      }
    }

    const commit = document.getElementById('commit-' + projectKey);
    if (!commit?.classList.contains('opened')) {
      commit?.classList.remove('hover');
    }
  }

  openProject(projectKey: string) {
    const cells = document.getElementsByClassName('cell');
    for (let element of cells) {
      element.classList.add('hidden');
    }

    const commits = document.getElementsByClassName('commit');
    for (let element of commits) {
      element.classList.remove('hover');
      element.classList.remove('opened');
    }

    const projects = document.getElementsByClassName('project-container');
    for (let element of projects) {
      if (element.id == projectKey) {
        element.classList.add('opened');

        // cell
        element.parentElement?.classList.add('opened');

        // commit
        const commit = document.getElementById('commit-' + element.id);
        console.log(commit);
        commit?.classList.add('opened');
      } else {
        element.classList.remove('opened');
        element.classList.add('hidden');

        // cell
        element.parentElement?.classList.remove('opened');
      }
    }

    document.getElementById(projectKey)!.scrollIntoView({ behavior: 'smooth' });
  }

  getColorForDate(dateKey: string, segments: timeline[]): string | null {
    const segment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return segment ? this.getColorProject(segment.contextKey) : null;
  }

  getIdSegment(segments: timeline[], date: string): string {
    const segment = segments.find((segment) => this.isBetweenTimeline(date, segment));
    return segment?.contextKey + '-' + date;
  }

  getColorProject(key: string) {
    return this.projectsService.getContext(key).color;
  }

  getProjectByDate(dateKey: string): ProjectInterface | undefined {
    const matchingProjects = Array.from(this.projects.values()).filter(
      (project) => project.dateKey === dateKey,
    );

    if (matchingProjects.length > 1) {
      console.warn(
        `Found ${matchingProjects.length} projects with dateKey "${dateKey}". Returning the first one.`,
      );
    }

    return matchingProjects[0];
  }

  isProjectInTimelineSegment(segments: timeline[], dateKey: string): boolean {
    let project = this.getProjectByDate(dateKey);
    if (!project) {
      return false;
    }
    const activeSegment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return activeSegment?.contextKey === project.contextKey;
  }

  isBetweenTimeline(dateKey: string, value: timeline): boolean {
    let yearEnd = value.yearEnd;
    let montEnd = value.monthEnd;
    if (value.yearEnd == 0 && value.monthEnd == 0) {
      const d = new Date();
      yearEnd = d.getFullYear();
      montEnd = d.getMonth() + 1;
    }

    const date = this.dateKeyToNumber(dateKey);
    const start = value.yearStart * 100 + value.monthStart;
    const end = yearEnd * 100 + montEnd;
    return date >= start && date <= end;
  }

  private dateKeyToNumber(key: string): number {
    if (!key) {
      return 0;
    }
    const [month, year] = key.split('.').map(Number);
    return year * 100 + month;
  }
}
