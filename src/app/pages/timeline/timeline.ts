import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectsService, timeline, timelines } from '../project/projects.service';
import { MiniProject } from './mini-project/mini-project';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [CommonModule, MiniProject, A11yModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly projectsService = inject(ProjectsService);
  timelines = timelines;

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  years = Array.from({ length: this.currentYear - 2017 + 1 }, (_, i) => this.currentYear - i);
  yearsAndStart = [...this.years].reverse();
  dateMap = new Map<number, string>();

  constructor() {
    this.fillDateMap();
  }

  getColor(key: string) {
    return this.projectsService.getContext(key).color;
  }

  // Create a map between position from the bottom to date like 01.2026
  private fillDateMap() {
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
