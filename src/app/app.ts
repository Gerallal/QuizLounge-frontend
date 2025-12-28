import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";
import { Friends } from "./component/friends/friends";
import { Stats } from './component/stats/stats';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';
import { CreateQuiz } from './component/create-quiz/create-quiz';
import {AddQuestion} from './component/add-question/add-question';
import {Solve} from './component/solve/solve';
import { RatingQuiz } from './component/rating-quiz/rating-quiz';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, Login, Register, Friends, SolveQuizList, CreateQuiz, Stats,
  AddQuestion, Solve, RatingQuiz],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizLoungeFrontend');
}
