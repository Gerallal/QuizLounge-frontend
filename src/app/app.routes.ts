import { Routes } from '@angular/router';
import {Login} from './component/login/login';
import {Register} from './component/register/register';
import {Friends} from './component/friends/friends';
import {Home} from './component/home/home';
import { SolveQuiz } from './solve-quiz/solve-quiz';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';
import {CreateQuiz1} from './component/create-quiz1/create-quiz';
import {CreateQuiz2} from './create-quiz2/create-quiz2';
import {ShowMyQuiz} from './show-my-quiz/show-my-quiz';

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
  },

  {
    path: 'create1',
    component: CreateQuiz1
  },

  {
    path: 'create2',
    component: CreateQuiz2
  },

  {
    path: 'showMyQuiz',
    component: ShowMyQuiz
  }

];
