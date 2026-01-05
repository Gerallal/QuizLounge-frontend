import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { EditQuizService } from './edit-quiz-service';
import { Quiz } from '../../models/quiz-model';
import { User } from '../../models/user-model';
import { Question } from '../../models/question-model';

@Component({
  selector: 'app-edit-quiz',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit-quiz.html',
  styleUrl: './edit-quiz.css',
})

export class EditQuiz implements OnInit {

  quiz!: Quiz;
  quizId!: number;
  currentUser!: User;
  formData: Question[] = [];

  constructor(
    private editQuizService: EditQuizService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));

    this.loginService.userLogin().subscribe({
      next: (user) => (this.currentUser = user)
    });

    this.loadQuizById();
  }

  private loadQuizById() {
    this.editQuizService.getMyQuiz(this.quizId).subscribe({
      next: (quiz: Quiz) => {
        this.quiz = quiz;
        this.formData = quiz.questions;
      }
    });
  }

  onSubmit() {
    const payload = {
      id: this.quizId,
      title: this.quiz.title,
      description: this.quiz.description,
      category: this.quiz.category,
      author: this.quiz.author,
      questions: this.formData
    };

    this.editQuizService.editQuiz(this.quizId, payload)
      .subscribe(() => this.router.navigate(['/home']));
  }

  saveEdits() {
    this.onSubmit();
  }

  cancel() {
    this.router.navigate(['/myQuiz', this.quizId]);
  }

  addQuestion() {
    this.formData.push({
      questionText: '',
      questionType: 'SingleAnswerQuestion',
      answers: [{ answerText: '', correct: false }]
    });
  }

  removeQuestion(questionIndex: number) {
    this.formData.splice(questionIndex, 1);
  }

  onQuestionTypeChange(questionIndex: number) {
    const question = this.formData[questionIndex];

    if (question.questionType === 'UserInputQuestion') {
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

    if (question.questionType === 'UserInputQuestion') return;

    question.answers.push({ answerText: '', correct: false });
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
