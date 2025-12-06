import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";
import { Friends } from "./component/friends/friends";
import { CreateQuiz} from "./component/create-quiz/create-quiz"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Login, Register, Friends, CreateQuiz],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizLoungeFrontend');
}
