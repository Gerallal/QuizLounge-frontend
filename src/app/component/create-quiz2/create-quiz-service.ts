import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../models/question-model';

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
