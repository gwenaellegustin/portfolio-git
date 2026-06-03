import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ProjectInterface,
  ProjectsService,
  timeline,
  timelines,
} from '../project/projects.service';
import { MiniProject } from './mini-project/mini-project';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [CommonModule, MiniProject],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline implements AfterViewInit {
  readonly projectsService = inject(ProjectsService);
  timelines = timelines;
  dateMap = this.projectsService.dateMap;
  projectsByDate = this.projectsService.projectsByDate;
  years = this.projectsService.years;

  constructor() {}

  ngAfterViewInit(): void {
    this.setPointProject();
  }

  getColorForDate(dateKey: string, segments: timeline[]): string | null {
    const segment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return segment ? this.getColor(segment.contextKey) : null;
  }

  getIdSegment(segments: timeline[], date: string): string {
    const segment = segments.find((segment) => this.isBetweenTimeline(date, segment));
    return segment?.contextKey + '-' + date;
  }

  getColor(key: string) {
    return this.projectsService.getContext(key).color;
  }

  private setPointProject() {
    this.projectsByDate.forEach((projects, dateKey) => {
      projects.forEach((project, index) => {
        const elementId = project.contextKey + '-' + dateKey;

        const element = document.getElementById(elementId);
        if (!element) {
          return;
        }

        if (element.classList.contains('month')) {
          element.classList.replace('month', 'point');
        } else {
          element.classList.add('point');
        }
        const color = this.getColor(project.contextKey);
        if (color) {
          element.classList.add(`${color}-background`);
        }
      });
    });
  }

  // @TODO: should be done 1 in projects.service
  getProjectsByColumnWithDate(dateKey: string, position: string): ProjectInterface[] {
    const projects = this.projectsByDate.get(dateKey) ?? [];
    const timelinesLength = Array.from(this.timelines.keys()).length;
    const threshold = Math.ceil(timelinesLength / 2);

    return projects.filter((project) => {
      // Find which timeline contains this project's contextKey
      let timelineNum = 0;
      let index = 0;
      for (const [key, segments] of this.timelines.entries()) {
        index++;
        const hasContext = segments.some((seg) => seg.contextKey === project.contextKey);
        if (hasContext) {
          timelineNum = index;
          break;
        }
      }

      if (position === 'left') {
        return timelineNum <= threshold;
      } else if (position === 'right') {
        return timelineNum > threshold;
      }
      return false;
    });
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
