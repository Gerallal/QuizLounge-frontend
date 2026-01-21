import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {CreateQuizService1} from './create-quiz-service';

@Component({
  selector: 'app-create-quiz1',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-quiz.html',
  styleUrl: './create-quiz.css',
})

export class CreateQuiz1 {

  title = "";
  description = "";
  selectedCategory = "";

  constructor(private router: Router, private createQuizService1: CreateQuizService1) {}

  onSubmit(){
    const payload = {
      id: 0,
      title: this.title,
      description: this.description,
      category: this.selectedCategory
    };

    this.createQuizService1.createQuiz(payload).subscribe((result: any) => {
      this.router.navigate(['/create-quiz2', result.quizId]);
    });
  }
}
