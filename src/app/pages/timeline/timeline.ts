import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarService } from '../../components/navbar/navbar.service';
import { DataService, ProjectInterface, TimelineInterface, timelines } from './data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly dataService = inject(DataService);
  readonly navbarService = inject(NavbarService);
  timelines = timelines;
  currentYear = this.dataService.currentYear;
  currentMonth = this.dataService.currentMonth;
  dateMap = this.dataService.dateMap;
  projects = this.dataService.projects;
  projectsByKey = this.dataService.projectsByKey;
  projectsByDate = this.dataService.projectsByDate;
  legend$ = this.navbarService.legend$;

  constructor() {}

  defineLegendByProject(contextKey: string) {
    const context = this.dataService.getContext(contextKey);
    this.navbarService.legend$.set(context.title);
    const legendElement = document.getElementById('legend');
    if (legendElement) {
      legendElement.className = '';
      legendElement?.classList.add(context.color + '-background');
    }
  }
  defineLegend(timelines: TimelineInterface[], monthYear: string) {
    const segment = this.getSegmentOfTimelines(timelines, monthYear);
    if (segment) {
      const context = this.dataService.getContext(segment.contextKey);
      this.navbarService.legend$.set(context.title);
      const legendElement = document.getElementById('legend');
      if (legendElement) {
        legendElement.className = '';
        legendElement?.classList.add(context.color + '-background');
      }
    }
  }
  resetLegend() {
    const legendElement = document.getElementById('legend');
    if (legendElement) {
      legendElement.className = '';
      this.navbarService.legend$.set('');
    }
  }

  hoverProject(projectKey: string) {
    const projects = document.getElementsByClassName('first-line');
    for (let element of projects) {
      if (element.parentElement!.id == projectKey) {
        element.classList.add('hover');
      }
    }

    const commit = document.getElementById('commit-' + projectKey);
    commit?.classList.add('hover');
  }

  leaveProject(projectKey: string) {
    const projects = document.getElementsByClassName('first-line');
    for (let element of projects) {
      if (element.parentElement!.id == projectKey) {
        element.classList.remove('hover');
      }
    }

    const commit = document.getElementById('commit-' + projectKey);
    if (!commit?.classList.contains('opened')) {
      commit?.classList.remove('hover');
    }
  }

  closeProject() {
    console.log('close project');
    const cells = document.getElementsByClassName('cell');
    for (let element of cells) {
      element.classList.remove('empty');
      element.classList.remove('hidden');
      element.classList.remove('opened');
      element.classList.add('default');
    }

    const commits = document.getElementsByClassName('commit');
    for (let element of commits) {
      element.classList.remove('hover');
      element.classList.remove('opened');
    }

    const projects = document.getElementsByClassName('project-container');
    for (let element of projects) {
      element.classList.remove('opened');
      element.classList.add('default');

      // cell
      element.parentElement?.classList.remove('opened');
    }
  }

  openProject(projectKey: string) {
    const project = this.projectsByKey.get(projectKey);
    const projects = document.getElementsByClassName('project-container');
    for (let element of projects) {
      if (element.id == projectKey && element.classList.contains('opened')) {
        this.closeProject();
        return;
      }
    }
    const cells = document.getElementsByClassName('cell');
    for (let element of cells) {
      if (element.classList.contains('col1') || element.classList.contains('col5')) {
        element.classList.add('hidden');
      }

      if (project?.position == 'left') {
        if (element.classList.contains('col2')) {
          element.classList.remove('default');
          element.classList.remove('hidden');
          element.classList.remove('opened');
          element.classList.add('empty');
        } else if (element.classList.contains('col4')) {
          element.classList.remove('default');
          element.classList.remove('empty');
          element.classList.remove('opened');
          element.classList.add('hidden');
        }
      }
      if (project?.position == 'right') {
        if (element.classList.contains('col4')) {
          // element.classList.remove('default');
          element.classList.remove('hidden');
          element.classList.remove('opened');
          // element.classList.add('empty');
        } else if (element.classList.contains('col2')) {
          element.classList.remove('default');
          element.classList.remove('empty');
          element.classList.remove('opened');
          element.classList.add('hidden');
        }
      }
    }

    const commits = document.getElementsByClassName('commit');
    for (let element of commits) {
      element.classList.remove('hover');
      element.classList.remove('opened');
    }

    for (let element of projects) {
      if (element.id == projectKey) {
        element.classList.add('opened');

        // cell
        element.parentElement?.classList.add('opened');

        // commit
        const commit = document.getElementById('commit-' + element.id);
        commit?.classList.add('opened');
      } else {
        element.classList.remove('opened');
        element.classList.add('default');

        // cell
        element.parentElement?.classList.remove('opened');
      }
    }

    document.getElementById(projectKey)!.scrollIntoView({ behavior: 'smooth' });
  }

  getColorForDate(dateKey: string, segments: TimelineInterface[]): string | null {
    const segment = segments.find((segment) => this.isBetweenTimeline(dateKey, segment));
    return segment ? this.getColorContext(segment.contextKey) : 'grey';
  }

  getIdSegment(segments: TimelineInterface[], date: string): string {
    const segment = segments.find((segment) => this.isBetweenTimeline(date, segment));
    return segment?.contextKey + '-' + date;
  }

  getColorContext(key: string) {
    return this.dataService.getContext(key).color;
  }

  getProjectByDate(dateKey: string): ProjectInterface | undefined {
    return this.projectsByDate.get(dateKey);
  }

  getSegmentOfTimelines(timelines: TimelineInterface[], monthYear: string) {
    const activeSegment = timelines.find((segment) => this.isBetweenTimeline(monthYear, segment));
    return activeSegment;
  }

  isProjectInTimelineSegment(segments: TimelineInterface[], monthYear: string): boolean {
    let project = this.getProjectByDate(monthYear);
    if (!project) {
      return false;
    }
    const activeSegment = this.getSegmentOfTimelines(segments, monthYear);
    return activeSegment?.contextKey === project!.contextKey;
  }

  isBetweenTimeline(dateKey: string, value: TimelineInterface): boolean {
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
