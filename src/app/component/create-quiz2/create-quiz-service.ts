import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CreateQuizService2 {

  _url = "http://localhost:8080/quizlounge/api/quiz/create2";

  constructor(private httpClient: HttpClient) {}

  createQuiz(payload: any) {
    return this.httpClient.post(this._url, payload, {
      withCredentials: true
    });
  }

}
