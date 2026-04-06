import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-me',
  imports: [MatTooltipModule],
  templateUrl: './me.html',
  styleUrl: './me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Me {}
