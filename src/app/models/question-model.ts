import { Answer } from './answer-model';

export interface Question {
  questionId?: number;
  questionText: string;
  questionType: 'SingleAnswerQuestion' | 'MultipleAnswerQuestion' | 'UserInputQuestion';
  answers: Answer[];
}
