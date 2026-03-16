import { Routes } from '@angular/router';
import { CaseOverview } from './features/case-overview/case-overview';
import { Evidence } from './features/evidence/evidence';
import { Intro } from './features/intro/intro';
import { Suspects } from './features/suspects/suspects';
import { Timeline } from './features/timeline/timeline';

export const routes: Routes = [
  {
    path: '',
    component: Intro,
  },
  {
    path: 'case',
    component: CaseOverview,
  },
  {
    path: 'suspects',
    component: Suspects,
  },
  {
    path: 'evidence',
    component: Evidence,
  },
  {
    path: 'timeline',
    component: Timeline,
  },
];
