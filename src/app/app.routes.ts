import { Routes } from '@angular/router';
import {Login} from './component/login/login';
import {Register} from './component/register/register';
import {Friends} from './component/friends/friends';
import {Home} from './component/home/home';
import { SolveQuizList } from './component/solve-quiz-list/solve-quiz-list';
import {AddQuestion} from './component/add-question/add-question';
import {Solve} from './component/solve/solve';
import { Stats } from './component/stats/stats';
import { RatingQuiz } from './component/rating-quiz/rating-quiz';
import {CreateQuiz1} from './component/create-quiz1/create-quiz';
import {CreateQuiz2} from './component/create-quiz2/create-quiz2';
import {ShowMyQuiz} from './component/show-my-quiz/show-my-quiz';
import {FriendProfile} from './component/friend-profile/friend-profile';
import {EditQuiz} from './component/edit-quiz/edit-quiz';

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
    path: 'create1',
    component: CreateQuiz1
  },

  {
    path: 'create-quiz2/:id',
    component: CreateQuiz2
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
  },

  {
    path: 'myQuiz/:id',
    component: ShowMyQuiz
  },

  {
    path: 'friend/:id',
    component: FriendProfile
  },

  {
    path: 'myQuiz/edit/:id',
    component: EditQuiz
  }

];
