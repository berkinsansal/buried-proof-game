export interface Evidence {
  id: string;
  title: string;
  type: 'document' | 'photo' | 'message' | 'report';
  summary: string;
  description: string;
}
