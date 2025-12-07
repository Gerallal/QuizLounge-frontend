import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quiz, User} from '../component/home/home.service';

@Injectable({
  providedIn: 'root',
})

export class ShowMyQuizService {
  _url = "http://localhost:8080/quizlounge/api/home/myQuiz/";

  constructor(private httpClient:HttpClient) {
  }

  getMyQuiz(quiz_id: number): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this._url + quiz_id, {
      withCredentials: true
    })
  }
}
