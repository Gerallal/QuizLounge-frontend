import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {LoginService} from '../login/login.service';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';

@Component({
  selector: 'app-home',
  imports: [NgForOf, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit{
  friends: User[] = [];
  currentUser!: User;
  showFriends = true;
  myQuizzes: Quiz[] = [];
  receivedQuizzes!: Quiz[];


  constructor(
    private homeService: HomeService,
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadCurrentUserAndFriends();
    this.loadMyQuizzes();
    this.loadSendQuizzesOfMyFriends();
  }

  openMyQuiz(quiz: Quiz) {
    console.log(quiz);
    console.log(quiz.id);
    this.router.navigate(['/myQuiz/', quiz.id]);
  }

  openFriendPage(){
    this.router.navigate(['/friends']);
  }

  openFriends(id: number) {
    console.log(this.friends);
    this.router.navigate(['/friend', id]);
  }

  openAddQuiz() {
    this.router.navigate(['/create1']);
  }

  openTheirQuiz(quiz: Quiz) {
    console.log(quiz);
    console.log(quiz.id);
    this.router.navigate(['/myQuiz/', quiz.id]);
  }

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

  private loadMyQuizzes() {
    this.loginService.userLogin().subscribe({
      next: (user) => {
        this.currentUser = user;
        //console.log('Eingeloggt als:', user);

        this.homeService.getMyQuiz(user.id).subscribe({
          next: (response) => {
            this.myQuizzes = response;
            //console.log('Freunde:', response);
          }
        });
      }
    });
  }

  private loadSendQuizzesOfMyFriends() {
    this.loginService.userLogin().subscribe({
      next: (user) => {
        this.currentUser = user;

        this.homeService.getSendQuizzesOfMyFriends(user.id).subscribe({
          next: (response) => {
            this.receivedQuizzes = response;
          }
        });
      }
    });
  }
}
