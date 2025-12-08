import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateQuizService2} from './create-quiz-service';

export interface Question {
  questionName: string;
  typeOfQuestion: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  correct: boolean;
}

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
      questionName: '',
      typeOfQuestion: 'single',
      answers: [{ text: '', correct: false }]
    }
    ];

  constructor(private router: Router, private createQuizService2: CreateQuizService2, private route: ActivatedRoute) { }

  ngOnInit() {
        // @ts-ignore
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    }

  onSubmit(){
    const payload = {
      id: this.quizId,
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
      questionName: '',
      typeOfQuestion: 'single',
      answers: [{ text: '', correct: false }]
    })
  }

  addAnswer(questionIndex: number){
    this.formData[questionIndex].answers.push({ text: '',
      correct: false });
  }

  removeAnswer(questionIndex: number, answerIndex: number){
    this.formData[questionIndex].answers.splice(answerIndex, 1);
  }
}
