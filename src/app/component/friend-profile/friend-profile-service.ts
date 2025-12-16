import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';

@Injectable({
  providedIn: 'root',
})
export class FriendProfileService {
  private _url:string = "http://localhost:8080/quizlounge/api/";

  constructor(private httpClient:HttpClient) {
  }

  getFriendProfile(friendId: number): Observable<User> {
    return this.httpClient.get<User>(this._url + "friend/profile/" + friendId, {
      withCredentials: true
    });
  }

  getFriendQuizzes(friendId: number): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(
      this._url + "friend/" + friendId + "/quizzes",
      { withCredentials: true }
    );
  }


  getFriendById(userId: number): Observable<User> {
    return this.httpClient.get<User>(this._url  + "home/" + userId + "/friends", {
      withCredentials: true
    });
  }

  getTheirQuiz(userId: number): Observable<Quiz> {
    return this.httpClient.get<Quiz>(this._url + "quiz/home/" + userId + "/create1", {
      withCredentials: true
    })
  }

  getSentQuizzesOfMyFriends(userId: number) {
    return this.httpClient.get<Quiz[]>(this._url + "home/" + "received/" + userId, {
      withCredentials: true
    })
  }

  deleteFriend(userId: number) {
    return this.httpClient.delete<User>(this._url + "friend/" + userId, {
      withCredentials: true
    })
  }


}
