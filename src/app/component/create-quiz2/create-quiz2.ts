import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateQuizService2 } from './create-quiz-service';
import { Question } from '../../models/question-model';

@Component({
  selector: 'app-create-quiz2',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-quiz2.html',
  styleUrl: './create-quiz2.css',
})
export class CreateQuiz2 implements OnInit {

  quizId!: number;

  formData: Question[] = [];

  constructor(
    private router: Router,
    private createQuizService2: CreateQuizService2,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.addQuestion(); // erste Frage direkt anlegen
  }

  onSubmit() {
    const payload = {
      id: this.quizId,
      author: {
        id: Number(sessionStorage.getItem('userId')),
        username: sessionStorage.getItem('username'),
      },
      title: '',
      description: '',
      category: '',
      questions: this.formData
    };

    this.createQuizService2.createQuiz(payload).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  addQuestion() {
    this.formData.push({
      questionText: '',
      questionType: 'SingleAnswerQuestion',
      answers: [
        { answerText: '', correct: false }
      ]
    });
  }

  removeQuestion(questionIndex: number) {
    this.formData.splice(questionIndex, 1);
  }

  onQuestionTypeChange(questionIndex: number) {
    const question = this.formData[questionIndex];

    if (question.questionType === 'UserInputQuestion') {
      // exakt eine Antwort, immer korrekt
      question.answers = [
        { answerText: '', correct: true }
      ];
    }

    if (
      question.questionType === 'SingleAnswerQuestion' ||
      question.questionType === 'MultipleAnswerQuestion'
    ) {
      if (question.answers.length === 0) {
        question.answers.push({ answerText: '', correct: false });
      }
    }
  }

  addAnswer(questionIndex: number) {
    const question = this.formData[questionIndex];

    if (question.questionType === 'UserInputQuestion') {
      return;
    }

    question.answers.push({
      answerText: '',
      correct: false
    });
  }

  removeAnswer(questionIndex: number, answerIndex: number) {
    const answers = this.formData[questionIndex].answers;

    if (answers.length > 1) {
      answers.splice(answerIndex, 1);
    }
  }

  setSingleCorrect(questionIndex: number, answerIndex: number) {
    const question = this.formData[questionIndex];

    if (question.questionType === 'SingleAnswerQuestion') {
      question.answers.forEach((a, i) => {
        a.correct = i === answerIndex;
      });
    }
  }
}
