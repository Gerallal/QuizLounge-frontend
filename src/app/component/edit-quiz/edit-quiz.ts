import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Quiz} from '../../models/quiz-model';
import {User} from '../../models/user-model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {EditQuizService} from './edit-quiz-service';
import {Question} from '../../models/question-model';

@Component({
  selector: 'app-edit-quiz',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-quiz.html',
  styleUrl: './edit-quiz.css',
})

export class EditQuiz {

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

  onSubmit(){
    const payload = {
      id: this.quizId,
      title: this.quiz.title,
      description: this.quiz.description,
      category: this.quiz.category,
      author: this.quiz.author,
      questions: this.formData
    };

    this.editQuizService.editQuiz(this.quizId, payload)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

  private loadQuizById() {
    const quiz_id = Number(this.route.snapshot.paramMap.get('id'));

    this.editQuizService.getMyQuiz(quiz_id).subscribe({
      next: (quiz: Quiz) => {
        this.quiz = {
          id: quiz.id,
          title: quiz.title,
          description: quiz.description,
          category: quiz.category,
          author: quiz.author,
          questions: quiz.questions,
          attemptId: quiz.attemptId,
        };
        console.log(quiz);

        this.formData = quiz.questions;
      }
    })
  }

  addQuestion(){
    this.formData.push({
      questionText: '',
      questionType: 'single',
      answers: [{ answerText: '', correct: false }]
    })
  }

  removeQuestion(questionIndex: number){
    this.formData.splice(questionIndex, 1);
  }

  addAnswer(questionIndex: number){
    this.formData[questionIndex].answers.push({ answerText: '',
      correct: false });
  }

  removeAnswer(questionIndex: number, answerIndex: number){
    this.formData[questionIndex].answers.splice(answerIndex, 1);
  }

  saveEdits() {
    if (!this.quiz) return;
    this.onSubmit();
  }

  cancel(){
    this.router.navigate(['/myQuiz/', this.quizId]);
  }

}
