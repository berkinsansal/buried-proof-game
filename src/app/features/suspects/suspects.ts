import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_001 } from '../../shared/data/case-001';

@Component({
  selector: 'app-suspects',
  imports: [RouterLink],
  templateUrl: './suspects.html',
  styleUrl: './suspects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Suspects {
  protected readonly suspects = CASE_001.suspects;
}
