import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {CreateQuizService} from './create-quiz-service';

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

  public formData = {title: '', category: '', description: ''};

  successMessage: string = "";

  constructor(private router: Router, private createQuizService: CreateQuizService) {
  }
  onSubmit(){
    console.log(this.formData);
    this.createQuizService.createQuiz(
      this.formData.title,
      this.formData.description,
      this.formData.category
    ).subscribe(id => {
          this.createQuizService.quizId = id;
          console.log("Id: ", id);
          this.router.navigate(['/create2']);
    });
  }
}
