import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateQuizService2} from './create-quiz-service';
import {Question} from '../../models/question-model';

@Component({
  selector: 'app-create-quiz2',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './create-quiz2.html',
  styleUrl: './create-quiz2.css',
})

export class CreateQuiz2 implements OnInit {

  quizId!: number;

  formData: Question[] = [
    {
      questionText: '',
      questionType: 'single',
      answers: [{ answerText: '', correct: false }]
    }
  ];

  constructor(private router: Router,
              private createQuizService2: CreateQuizService2,
              private route: ActivatedRoute) {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit(){
    const payload = {
      id: this.quizId,
      author: {
        id: Number(sessionStorage.getItem('userId')),
        username: sessionStorage.getItem('username'),
      },
      title: "",
      description: "",
      category: "",
      questions: this.formData
    };

    this.createQuizService2.createQuiz(payload)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
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
    this.formData[questionIndex].answers.push({ answerText: '', correct: false });
  }

  removeAnswer(questionIndex: number, answerIndex: number){
    this.formData[questionIndex].answers.splice(answerIndex, 1);
  }

}
