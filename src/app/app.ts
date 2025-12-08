import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";
import { Friends } from "./component/friends/friends";
import { SolveQuiz } from './solve-quiz/solve-quiz';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';
import { CreateQuiz1 } from './component/create-quiz1/create-quiz';
import {CreateQuiz2} from './create-quiz2/create-quiz2';
import {ShowMyQuiz} from './show-my-quiz/show-my-quiz';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Login, Register, Friends, SolveQuiz, SolveQuizList, CreateQuiz1, CreateQuiz2, ShowMyQuiz],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizLoungeFrontend');
}
