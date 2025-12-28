import { Answer } from './answer-model';

export interface Question {
  questionName: string;
  typeOfQuestion: string;
  answers: Answer[];
}
