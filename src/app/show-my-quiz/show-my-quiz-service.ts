import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

export interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  questions: Question[];
}

export interface Question {
  questionName: string;
  typeOfQuestion: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  correct: boolean;
}

export interface User {
  username: string;
  id: number;
  friends: User[];
}

@Injectable({
  providedIn: 'root',
})

export class ShowMyQuizService {
  _url = "http://localhost:8080/quizlounge/api/quiz/myQuiz/";

  constructor(private httpClient:HttpClient) {}

  getMyQuiz(quiz_id: number) {
    return this.httpClient.get<Quiz>(this._url + quiz_id, {
      withCredentials: true
    })
  }

  getFriends(userId: number) {
    return this.httpClient.get<User[]>(this._url  + userId + "/friends", {
      withCredentials: true
    });
  }

  shareQuizWithFriend(quiz_id: number, friend_id: number) {
    return this.httpClient.post(this._url + "share/" + quiz_id + "/" + friend_id,
      {},
      {
      withCredentials: true,
      responseType: "text"
      })
  }

  deleteQuiz(quizId: number) {
    return this.httpClient.delete(this._url + quizId, {
      withCredentials: true }
    );
  }

  editQuiz(id: number) {
    return this.httpClient.patch(this._url + "/edit/" + id, {
      withCredentials: true
    })
  }

}
