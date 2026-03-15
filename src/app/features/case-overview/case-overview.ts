import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CASE_001 } from '../../shared/data/case-001';

@Component({
  selector: 'app-case-overview',
  imports: [],
  templateUrl: './case-overview.html',
  styleUrl: './case-overview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseOverview {
  protected readonly caseFile = CASE_001;
}
