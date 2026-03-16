import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_001 } from '../../shared/data/case-001';

@Component({
  selector: 'app-timeline',
  imports: [RouterLink],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  protected readonly timeline = CASE_001.timeline;
}
