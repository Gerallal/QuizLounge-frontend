import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ShowMyQuizService } from './show-my-quiz-service';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {HomeService} from '../home/home.service';
import {LoginService} from '../login/login.service';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';
import {Attempt} from '../../models/attempt-model';


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
  userAnswers: { [questionIndex: number]: number } = {};
  currentUser!: User;
  friends: User[] = [];
  selectedFriend?: User;

  constructor(
    private route: ActivatedRoute,
    private showMyQuizService: ShowMyQuizService,
    private loginService: LoginService,
    private homeService: HomeService,
    private router : Router
  ) {}

  private loadCurrentUserAndFriends() {
    this.loginService.userLogin().subscribe({
      next: (user) => {
        this.currentUser = user;
        //console.log('Eingeloggt als:', user);

        this.homeService.getFriends(user.id).subscribe({
          next: (response) => {
            this.friends = response;
            //console.log('Freunde:', response);
          }
        });
      }
    });
  }

  private loadQuizById() {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(quizId);

    this.showMyQuizService.getMyQuiz(quizId).subscribe({
      next: (quiz: Quiz) => {
        this.quiz = quiz;
        console.log(quiz);
      }
    })
  }

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(quizId);

    this.loginService.userLogin().subscribe({
      next: (user) => (this.currentUser = user)
    });

    this.loadCurrentUserAndFriends();
    this.loadQuizById();

    this.showMyQuizService.startAttempt(quizId).subscribe(attempt => {
      this.attempt = attempt;

      this.showMyQuizService.getAttempt(attempt.attemptId).subscribe(a => {
        //console.log("attempt "+this.quiz.userAnswers);
        this.attempt = a;
      });
    });
  }

  shareMyQuiz() {
    if (!this.quiz || !this.selectedFriend) return;

    if (this.currentUser.id === this.quiz.author.id) {
      this.showMyQuizService.shareQuizWithFriend(this.quiz.id, this.selectedFriend.id)
        .subscribe({
          next: () => console.log(`Quiz wurde an ${this.selectedFriend?.username} geschickt`),
          error: (err) => console.error(err)
        });
    }

  }

  editMyQuiz() {
    if (!this.quiz) return;

    this.router.navigate(['/myQuiz/edit/', this.quiz.id]);
  }

  deleteMyQuiz() {
    if (!this.quiz) return;

    if (this.currentUser.id === this.quiz.author.id) {
      if (!confirm("Wirklich löschen?")) return;

      this.showMyQuizService.deleteQuiz(this.quiz.id).subscribe({
        next: () => {
          console.log("Quiz gelöscht!");
          this.router.navigate(['/home']);
        },
        error: (err: any) => console.error(err)
      })
    }
  }

  submitQuiz() {
    this.showMyQuizService.evaluateAttempt(this.attempt.attemptId, this.userAnswers)
      .subscribe(result => {
        console.log('Result:', result);
        console.log(this.userAnswers);
        this.router.navigate(['/ratingQuiz', this.quiz.id]);
      });
  }

}
