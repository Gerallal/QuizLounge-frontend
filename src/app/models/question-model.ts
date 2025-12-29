import { Answer } from './answer-model';

export interface Question {
  questionText: string;
  questionType: string;
  answers: Answer[];
}
