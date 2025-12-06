import { Routes } from '@angular/router';
import {Login} from './component/login/login';
import {Register} from './component/register/register';
import {Friends} from './component/friends/friends';
import {Home} from './component/home/home';
import { SolveQuiz } from './solve-quiz/solve-quiz';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'friends',
    component: Friends
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'solveQuiz',
    component: SolveQuiz
  },

  {
    path: 'solveQuizList',
    component: SolveQuizList
  }

];
