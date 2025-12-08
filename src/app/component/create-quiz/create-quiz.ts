import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {CreateQuizService} from './create-quiz-service';

@Component({
  selector: 'app-create-quiz',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-quiz.html',
  styleUrl: './create-quiz.css',
})
export class CreateQuiz {

  public formData = {title: '', category: '', description: ''};

  successMessage: string = "";

  constructor(private router: Router, private createQuizService: CreateQuizService) {
  }
  onSubmit(){
    console.log(this.formData);
    this.createQuizService.createQuiz(this.formData.title,
                                      this.formData.description,
                                      this.formData.category).subscribe(
                                        data => {
                                          this.successMessage = data;
                                          this.router.navigate(['add-question', data.quizId]);
                                        }
    );
  }
}
