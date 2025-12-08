import {Component, OnInit} from '@angular/core';
import {HomeService, User, Quiz} from './home.service';
import {LoginService} from '../login/login.service';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgForOf, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  friends: User[] = [];
  currentUser!: User;
  //public listName:string = "My Quizzes";
  showFriends = true;
  myQuizzes: Quiz[] = [];


  constructor(
    private homeService: HomeService,
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadCurrentUserAndFriends();
    this.loadMyQuizzes();
  }

  openQuiz(quiz: Quiz) {
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
}
