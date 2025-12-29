import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";
import { Friends } from "./component/friends/friends";
import { Stats } from './component/stats/stats';
import { SolveQuizList } from './component/solve-quiz-list/solve-quiz-list';
import {AddQuestion} from './component/add-question/add-question';
import {Solve} from './component/solve/solve';
import { RatingQuiz } from './component/rating-quiz/rating-quiz';
import {CreateQuiz2} from './component/create-quiz2/create-quiz2';
import {CreateQuiz1} from './component/create-quiz1/create-quiz';
import {ShowMyQuiz} from './component/show-my-quiz/show-my-quiz';
import {EditQuiz} from './component/edit-quiz/edit-quiz';
import {FriendProfile} from './component/friend-profile/friend-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterLink, Home, Login, Register,
    Friends, FriendProfile, SolveQuizList,
    CreateQuiz1, CreateQuiz2, ShowMyQuiz,
    EditQuiz, Stats, AddQuestion, Solve,
    RatingQuiz
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizLoungeFrontend');
}
