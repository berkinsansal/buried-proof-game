import { Evidence } from './evidence';
import { Suspect } from './suspect';
import { TimelineEvent } from './timeline-event';

export interface CaseFile {
  id: string;
  title: string;
  overview: string;
  victim: string;
  suspects: Suspect[];
  evidence: Evidence[];
  timeline: TimelineEvent[];
}
