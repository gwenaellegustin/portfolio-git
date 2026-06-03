import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectInterface, ProjectsService, timeline, timelines } from './projects.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly projectsService = inject(ProjectsService);
  timelines = timelines;
  dateMap = this.projectsService.dateMap;
  projectsByDate = this.projectsService.projectsByDate;

  constructor() {}

  openProject(projectKey: string) {
    console.log(projectKey);
    const cells = document.getElementsByClassName('cell');
    for (let element of cells) {
      element.classList.add('hidden');
    }

    const projects = document.getElementsByClassName('project-container');
    console.log(projectKey);
    for (let element of projects) {
      if (element.id == projectKey) {
        element.classList.add('opened');
        element.parentElement!.style.flex = '1';
        element.parentElement!.style.maxWidth = 'none';
      }
      if (element.id != projectKey) {
        element.classList.add('hidden');
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
    return this.projectsByDate.get(dateKey);
  }

  isProjectInTimelineSegment(segments: timeline[], dateKey: string): boolean {
    let project = this.getProjectByDate(dateKey);
    if (!project) {
      return false;
    }
    const activeSegment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return activeSegment?.contextKey === project.contextKey;
  }

  // @TODO: improve this by storing value
  getPosition(project: ProjectInterface): 'left' | 'right' {
    const timelinesLength = this.timelines.size;
    const threshold = Math.ceil(timelinesLength / 2);

    let timelineNum = 0;
    let index = 0;

    for (const [, segments] of this.timelines.entries()) {
      index++;
      if (segments.some((segment) => segment.contextKey === project.contextKey)) {
        timelineNum = index;
        break;
      }
    }

    return timelineNum <= threshold ? 'left' : 'right';
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
