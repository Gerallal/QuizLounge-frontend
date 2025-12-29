import { User } from './user-model';
import { Question } from './question-model';

export interface Quiz {
  id: number;
  title: string;
  description?: string;
  category: string;
  author: User;
  questions: Question[];
  attemptId: number;
}
