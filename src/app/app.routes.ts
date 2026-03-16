import { Routes } from '@angular/router';
import { CaseOverview } from './features/case-overview/case-overview';
import { Intro } from './features/intro/intro';
import { Suspects } from './features/suspects/suspects';

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
];
