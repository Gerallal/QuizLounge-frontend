import { Quiz } from './quiz-model';

export interface User {
  id: number;
  username: string;
  receivedQuizzes?: Quiz[];
}
