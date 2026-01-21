import {Component, OnInit, signal} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";
import { Friends } from "./component/friends/friends";
import { Stats } from './component/stats/stats';
import { RatingQuiz } from './component/rating-quiz/rating-quiz';
import {CreateQuiz2} from './component/create-quiz2/create-quiz2';
import {CreateQuiz1} from './component/create-quiz1/create-quiz';
import {ShowMyQuiz} from './component/show-my-quiz/show-my-quiz';
import {EditQuiz} from './component/edit-quiz/edit-quiz';
import {FriendProfile} from './component/friend-profile/friend-profile';
import {LoginService} from './component/login/login.service';
import {User} from './models/user-model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterLink, Home, Login, Register,
    Friends, FriendProfile, CreateQuiz1,
    CreateQuiz2, ShowMyQuiz, EditQuiz,
    Stats, RatingQuiz, NgOptimizedImage
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  currentUser?: User;
  protected readonly title = signal('QuizLoungeFrontend');

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.userLogin().subscribe({
      next: user => {
        this.currentUser = user;
      },
      error: () => {
        this.currentUser = undefined;
      }
    })
  }
}
