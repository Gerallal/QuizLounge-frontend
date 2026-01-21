import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {LoginService} from '../login/login.service';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';
import {MatBadgeModule} from '@angular/material/badge';
import {FriendsService} from '../friends/friends.service';
import {StatsService} from '../stats/stats-service';

@Component({
  selector: 'app-home',
  imports: [NgForOf, NgIf, MatBadgeModule, DecimalPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit{
  friends: User[] = [];
  myQuizzes: Quiz[] = [];
  receivedQuizzes: Quiz[] = [];

  showFriends = true;
  friendRequestCount = 0;
  quizRatings: Map<number, number> = new Map();

  constructor(
    private homeService: HomeService,
    private loginService: LoginService,
    private friendsService: FriendsService,
    private statsService: StatsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFriends();
    this.loadMyQuizzes();
    this.loadReceivedQuizzes();
    this.loadRatings();
    this.loadFriendRequests();
  }


  openFriends(id: number) {
    this.router.navigate(['/friend', id]);
  }

  openFriendPage() {
    this.router.navigate(['/friends']);
  }

  openAddQuiz() {
    this.router.navigate(['/create1']);
  }

  openMyQuiz(quiz: Quiz) {
    this.router.navigate(['/myQuiz', quiz.id]);
  }

  openTheirQuiz(quiz: Quiz) {
    this.router.navigate(['/myQuiz', quiz.id]);
  }

  seeAllFriends() {
    this.router.navigate(['/allFriends']);
  }

  seeAllMyQuizzes() {
    this.router.navigate(['/allQuizzes'], {
      queryParams: { tab: 'my' }
    });
  }

  seeAllSentQuizzes() {
    this.router.navigate(['/allQuizzes'], {
      queryParams: { tab: 'shared' }
    });
  }

  loadFriends() {
    this.loginService.userLogin().subscribe(user => {
      this.homeService.getFriends(user.id).subscribe(f => this.friends = f);
    });
  }

  loadMyQuizzes() {
    this.loginService.userLogin().subscribe(user => {
      this.homeService.getMyQuiz(user.id).subscribe(q => this.myQuizzes = q);
    });
  }

  loadReceivedQuizzes() {
    this.loginService.userLogin().subscribe(user => {
      this.homeService.getSentQuizzesOfMyFriends(user.id)
        .subscribe(q => this.receivedQuizzes = q);
    });
  }

  loadFriendRequests() {
    this.friendsService.retrieveAllFriendRequests().subscribe(res => {
      this.friendRequestCount = res.data.length;
    });
  }


  loadRatings() {
    this.statsService.getRatingsOfMyQuizzes().subscribe(ratings => {
      ratings.forEach(r => {
        this.quizRatings.set(r.quizId, r.averageRating);
      });
    });
  }

  getRatingForQuiz(quizId: number): number | null {
    return this.quizRatings.get(quizId) ?? null;
  }
}
