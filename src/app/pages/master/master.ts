import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '../project/project';

@Component({
  selector: 'app-master',
  imports: [Project],
  templateUrl: './master.html',
  styleUrls: ['./master.scss', '../project/project.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Master {}
