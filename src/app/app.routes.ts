import { Routes } from '@angular/router';
import {Login} from './component/login/login';
import {Register} from './component/register/register';
import {Friends} from './component/friends/friends';
import {Home} from './component/home/home';
import { SolveQuiz } from './solve-quiz/solve-quiz';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';
import { CreateQuiz } from './component/create-quiz/create-quiz';
import {AddQuestion} from './component/add-question/add-question';

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
    path: 'create',
    component: CreateQuiz
  },

  {
    path: 'add-question',
    component: AddQuestion
  }

];
