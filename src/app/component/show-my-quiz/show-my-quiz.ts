import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowMyQuizService } from './show-my-quiz-service';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { HomeService } from '../home/home.service';
import { LoginService } from '../login/login.service';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';
import { Attempt } from '../../models/attempt-model';

@Component({
  selector: 'app-show-my-quiz',
  templateUrl: './show-my-quiz.html',
  styleUrls: ['./show-my-quiz.css'],
  imports: [FormsModule, NgForOf, NgIf],
  providers: [ShowMyQuizService]
})
export class ShowMyQuiz implements OnInit {

  quiz!: Quiz;
  attempt!: Attempt;
  userAnswers: { [questionId: number]: string } = {};
  currentUser!: User;
  friends: User[] = [];
  selectedFriend?: User;

  constructor(
    private route: ActivatedRoute,
    private showMyQuizService: ShowMyQuizService,
    private loginService: LoginService,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadCurrentUserAndFriends();
    this.loadQuizAndAttempt(quizId);
  }

  private loadCurrentUserAndFriends() {
    this.loginService.userLogin().subscribe({
      next: (user) => {
        this.currentUser = user;

        this.homeService.getFriends(user.id).subscribe({
          next: (friends) => (this.friends = friends)
        });
      }
    });
  }

  private loadQuizAndAttempt(quizId: number) {

    this.showMyQuizService.getQuizToSolve(quizId).subscribe({
      next: (quiz) => (this.quiz = quiz)
    });

    this.showMyQuizService.startAttempt(quizId).subscribe(attempt => {
      this.attempt = attempt;

      this.showMyQuizService.getAttempt(attempt.attemptId)
        .subscribe(a => (this.attempt = a));
    });
  }

  toggleMultiAnswer(
    questionId: number,
    answerText: string,
    event: any
  ) {
    const current: string[] = this.userAnswers[questionId]
      ? this.userAnswers[questionId].split(',')
      : [];

    if (event.target.checked) {
      if (!current.includes(answerText)) {
        current.push(answerText);
      }
    } else {
      const index = current.indexOf(answerText);
      if (index > -1) current.splice(index, 1);
    }

    this.userAnswers[questionId] = current.join(',');
  }

  submitQuiz() {
    this.showMyQuizService
      .evaluateAttempt(this.attempt.attemptId, this.userAnswers)
      .subscribe({
        next: () => {
          this.router.navigate(['/ratingQuiz', this.quiz.id]);
        }
      });
  }

  shareMyQuiz() {
    if (!this.quiz || !this.selectedFriend) return;

    if (this.currentUser.id === this.quiz.author.id) {
      this.showMyQuizService
        .shareQuizWithFriend(this.quiz.id, this.selectedFriend.id)
        .subscribe();
    }
  }

  editMyQuiz() {
    if (this.quiz) {
      this.router.navigate(['/myQuiz/edit', this.quiz.id]);
    }
  }

  deleteMyQuiz() {
    if (!this.quiz) return;

    if (this.currentUser.id === this.quiz.author.id) {
      if (!confirm('Wirklich löschen?')) return;

      this.showMyQuizService.deleteQuiz(this.quiz.id).subscribe({
        next: () => this.router.navigate(['/home'])
      });
    }
  }
}
