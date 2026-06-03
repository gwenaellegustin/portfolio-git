import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ProjectInterface,
  projects,
  ProjectsService,
  timeline,
  timelines,
} from '../project/projects.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline implements AfterViewInit {
  readonly projectsService = inject(ProjectsService);
  timelines = timelines;
  projects = projects;
  projectsByDate = new Map<string, ProjectInterface[]>();

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  years = Array.from({ length: this.currentYear - 2017 + 1 }, (_, i) => this.currentYear - i);
  yearsAndStart = [...this.years].reverse();
  dateMap = new Map<number, string>();

  constructor() {
    this.setDateMap();
    console.log(this.dateMap);
    this.setProjectByDate();
    console.log(this.projectsByDate);
  }

  ngAfterViewInit(): void {
    this.setPointProject();
  }

  getColor(key: string) {
    return this.projectsService.getContext(key).color;
  }

  // Create a map between position from the bottom to date like 01.2026
  private setDateMap() {
    let index = 1;
    const add = (value: string) => this.dateMap.set(index++, value);

    for (let month = 1; month <= 12; month++) {
      add(`${month.toString().padStart(2, '0')}.1996`);
    }

    for (let emptyIndex = 13; emptyIndex <= 24; emptyIndex++) {
      add('');
    }

    for (const year of this.yearsAndStart) {
      const lastMonth = year === this.currentYear ? this.currentMonth : 12;
      for (let month = 1; month <= lastMonth; month++) {
        add(`${month.toString().padStart(2, '0')}.${year}`);
      }
    }
  }

  private setProjectByDate() {
    this.projects.forEach((project) => {
      if (!project.month || !project.year) {
        return;
      }

      const key = `${project.month.toString().padStart(2, '0')}.${project.year}`;
      const existing = this.projectsByDate.get(key) ?? [];
      existing.push(project);
      this.projectsByDate.set(key, existing);
    });
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

  getProjectsForDate(dateKey: string): ProjectInterface[] {
    if (!dateKey) {
      return [];
    }
    return this.projectsByDate.get(dateKey) ?? [];
  }

  getColorForDate(dateKey: string, segments: timeline[]): string | null {
    if (!dateKey || !segments || segments.length === 0) {
      return null;
    }

    const segment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return segment ? this.getColor(segment.contextKey) : null;
  }

  getIdSegment(dateKey: string, segments: timeline[]): string | null {
    if (!dateKey || !segments || segments.length === 0) {
      return null;
    }

    const segment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return segment ? segment.contextKey : null;
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
