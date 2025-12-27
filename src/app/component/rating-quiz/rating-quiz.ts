import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingQuizService } from './rating-quiz-service';

@Component({
  selector: 'app-rating-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating-quiz.html',
  styleUrl: './rating-quiz.css',
})
export class RatingQuiz {
  rating!: number;

  constructor(private route: ActivatedRoute, private ratingQuizService: RatingQuizService) {}

  submitRating() {
    const quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    if (!this.rating) {
    console.log('Bitte eine Bewertung auswählen');
    return;
  }
    this.ratingQuizService.saveRating(quizId, this.rating).subscribe(result => {
      console.log('Result:', result);
    })
  }
}
