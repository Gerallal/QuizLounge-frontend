import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';

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
