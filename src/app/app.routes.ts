import { Routes } from '@angular/router';
import {Login} from './component/login/login';
import {Register} from './component/register/register';
import {Friends} from './component/friends/friends';
import {Home} from './component/home/home';
import { SolveQuizList } from './solve-quiz-list/solve-quiz-list';
import { CreateQuiz } from './component/create-quiz/create-quiz';
import {AddQuestion} from './component/add-question/add-question';
import {Solve} from './component/solve/solve';
import { Stats } from './component/stats/stats';
import { RatingQuiz } from './component/rating-quiz/rating-quiz';

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
    path: 'solveQuizList',
    component: SolveQuizList
  },

  {
    path: 'create',
    component: CreateQuiz
  },

  {
    path: 'add-question/:id',
    component: AddQuestion
  },

  {
    path: 'solve/:quizId',
    component: Solve
  },

  {
    path: 'stats',
    component: Stats
  },

  {
    path: 'ratingQuiz/:quizId',
    component: RatingQuiz
  }

];
