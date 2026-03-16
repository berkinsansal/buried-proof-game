import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_001 } from '../../shared/data/case-001';

@Component({
  selector: 'app-evidence',
  imports: [RouterLink],
  templateUrl: './evidence.html',
  styleUrl: './evidence.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Evidence {
  protected readonly evidenceList = CASE_001.evidence;
}
