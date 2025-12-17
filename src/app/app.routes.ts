import { Routes } from '@angular/router';
import {Login} from './component/login/login';
import {Register} from './component/register/register';
import {Friends} from './component/friends/friends';
import {Home} from './component/home/home';
import { SolveQuiz } from './solve-quiz/solve-quiz';
import { CreateQuiz } from './component/create-quiz/create-quiz';
import {AddQuestion} from './component/add-question/add-question';
import {Solve} from './component/solve/solve';
import { SolveQuizList } from './component/solve-quiz-list/solve-quiz-list';
import {CreateQuiz1} from './component/create-quiz1/create-quiz';
import {CreateQuiz2} from './component/create-quiz2/create-quiz2';
import {ShowMyQuiz} from './component/show-my-quiz/show-my-quiz';
import {FriendProfile} from './component/friend-profile/friend-profile';

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
    path: 'add-question/:id',
    component: AddQuestion
  },

  {
    path: 'solve/:quizId',
    component: Solve
  },

  {
    path: 'create1',
    component: CreateQuiz1
  },

  {
    path: 'create-quiz2/:id',
    component: CreateQuiz2
  },

  {
    path: 'myQuiz/:id',
    component: ShowMyQuiz
  },

  {
    path: 'friend/:id',
    component: FriendProfile
  }

];
