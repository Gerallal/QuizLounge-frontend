import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _url:string = "http://localhost:8080/quizlounge/api/";

  constructor(private httpClient:HttpClient) {
  }

  getFriends(userId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this._url  + "home/" + userId + "/friends", {
      withCredentials: true
    });
  }

  getMyQuiz(author_id: number): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this._url + "quiz/home/" + author_id + "/create1", {
      withCredentials: true
    })
  }

  getTheirQuiz(userId: number): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this._url + "quiz/home/" + userId + "/create1", {
      withCredentials: true
    })
  }

  getSendQuizzesOfMyFriends(userId: number) {
    return this.httpClient.get<Quiz[]>(this._url + "home/" + "received/" + userId, {
      withCredentials: true
    })
  }


}
