import { Routes } from '@angular/router';
import { CaseOverview } from './features/case-overview/case-overview';
import { Intro } from './features/intro/intro';

export const routes: Routes = [
  {
    path: '',
    component: Intro,
  },
  {
    path: 'case',
    component: CaseOverview,
  },
];
