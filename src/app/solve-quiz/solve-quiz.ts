import { Component } from '@angular/core';
import { SolveQuizService } from './solve-quiz.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solve-quiz',
  standalone: true,
  imports: [FormsModule],
  providers: [SolveQuizService],
  templateUrl: './solve-quiz.html',
  styleUrl: './solve-quiz.css',
})
export class SolveQuiz {

  public Evaluate: any[] = [];

  public response: any;

  constructor(private _solveQuizService: SolveQuizService, private router: Router) {

  }

  formData = {question:"Was ist die Hauptstadt von Deutschland", answer:""};

  onSubmit() {
    this._solveQuizService.evaluateAnswer(this.formData)
    .subscribe(result => {
      this.response = result;
      console.log("Antwort vom Backend:", result)
    })

  }

}
