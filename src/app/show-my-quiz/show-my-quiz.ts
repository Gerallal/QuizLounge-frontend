import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowMyQuizService } from './show-my-quiz-service';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  questionName: string;
  typeOfQuestion: string;
  answers: Answer[];
}

interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  questions: Question[];
}

@Component({
  selector: 'app-show-my-quiz',
  templateUrl: './show-my-quiz.html',
  styleUrls: ['./show-my-quiz.css'],
  imports: [FormsModule, NgForOf, NgIf],
  providers: [ShowMyQuizService]
})
export class ShowMyQuiz implements OnInit {

  quiz?: Quiz;

  constructor(
    private route: ActivatedRoute,
    private showMyQuizService: ShowMyQuizService
  ) {}

  ngOnInit(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));

    this.showMyQuizService.getMyQuiz(quizId).subscribe({
      next: (data) => {
        console.log("Quiz erhalten:", data);
        this.quiz = data;
      },
      error: (err) => console.error("Fehler beim Laden:", err)
    });
  }
}
