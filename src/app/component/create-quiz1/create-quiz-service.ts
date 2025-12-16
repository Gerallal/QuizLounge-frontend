import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CreateQuizService1 {

  _url = "http://localhost:8080/quizlounge/api/quiz/create1";

  constructor(private httpClient: HttpClient) {}

  createQuiz(meta: any) {
    return this.httpClient.post(this._url, meta, {withCredentials: true});
  }

}
