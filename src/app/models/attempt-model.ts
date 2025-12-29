import {Question} from './question-model';

export interface Attempt {
  attemptId: number;
  quizId: number;
  questions: Question[];
}
