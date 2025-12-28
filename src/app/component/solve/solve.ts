import { Component, OnInit } from '@angular/core';
import {SolveService} from './solve.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-solve',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './solve.html',
  styleUrl: './solve.css',
})
export class Solve implements OnInit{
  quiz: any = { title: '', questions: [] };
  userAnswers: { [questionId: number]: string } = {};

  constructor(private router: Router, private solveService: SolveService, private route: ActivatedRoute) {}

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    this.solveService.startAttempt(quizId).subscribe(attempt => {
      // attempt ist jetzt ein AttemptDTO mit attemptId
      this.solveService.getAttempt(attempt.attemptId).subscribe(data => {
        this.quiz = data;
        this.quiz.attemptId = attempt.attemptId; // wichtig für submitQuiz
      });
    });
  }

  toggleMultiAnswer(questionId: number, answerText: string, event: any) {
    const current = this.userAnswers[questionId]
      ? this.userAnswers[questionId].split(',')
      : [];

    if (event.target.checked) {
      current.push(answerText);
    } else {
      const index = current.indexOf(answerText);
      if (index > -1) {
        current.splice(index, 1);
      }
    }

    this.userAnswers[questionId] = current.join(',');
  }

  submitQuiz() {
    this.solveService.evaluateAttempt(this.quiz.attemptId, this.userAnswers)
      .subscribe(result => {
        console.log('Result:', result);
        this.router.navigate(['/ratingQuiz', this.quiz.quizId]);
      });
  }

}
