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

  openProject(idElement: string) {
    const cells = document.getElementsByClassName('cell');
    console.log(idElement);
    for (let element of cells) {
      if (element.id == idElement) {
        element.classList.add('opened');
      }
      if (element.id != idElement && !element.classList.contains('col3')) {
        element.classList.add('hidden');
      }
    }
    document.getElementById(idElement)!.scrollIntoView({ behavior: 'smooth' });
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
