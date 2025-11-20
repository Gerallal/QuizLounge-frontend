import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Login } from "./component/login/login"
import { Register } from "./component/register/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizLoungeFrontend');
}
