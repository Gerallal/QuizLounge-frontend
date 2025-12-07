import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";
import { Friends } from "./component/friends/friends";
import { SolveQuiz } from './solve-quiz/solve-quiz';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';
import { CreateQuiz1 } from './component/create-quiz1/create-quiz';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Login, Register, Friends, SolveQuiz, SolveQuizList, CreateQuiz1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizLoungeFrontend');
}
