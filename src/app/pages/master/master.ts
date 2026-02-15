import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.html',
  styleUrl: './master.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Master { }
