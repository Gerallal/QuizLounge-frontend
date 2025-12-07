import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  id: number;
  username: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _url1:string = "http://localhost:8080/quizlounge/api/home/";
  private _url2:string = "http://localhost:8080/quizlounge/api/quiz/home/";

  constructor(private httpClient:HttpClient) {
  }

  getFriends(userId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this._url1  + userId + "/friends", {
      withCredentials: true
    });
  }

  getMyQuiz(author_id: number): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this._url2 + author_id + "/create1", {
      withCredentials: true
    })
  }
}
