import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.html',
  styleUrls: ['./master.scss', '../project/project.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Master {}
