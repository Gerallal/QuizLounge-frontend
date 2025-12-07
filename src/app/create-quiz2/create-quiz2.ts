import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
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
export class CreateQuiz2 {

  // @ts-ignore
  public formData: Question[] = [
    {
      questionName: '',
      typeOfQuestion: 'single',
      answers: [
        { text: '', correct: false },
    ]}];

  constructor(private router: Router, private createQuizService2: CreateQuizService2) {
  }

  onSubmit(){
    const payload = {
      title: this.createQuizService2.title,
      description: this.createQuizService2.description,
      category: this.createQuizService2.category,
      questions: this.formData
    }
    this.createQuizService2.createQuiz(payload)
      .subscribe(result => {
        console.log(result);
        //this.router.navigate(['/']);
      })
    console.log(this.formData);
    console.log(payload);
    this.router.navigate(['./home']);

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
