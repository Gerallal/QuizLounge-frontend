import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateQuizService2 {

  _url = "http://localhost:8080/quizlounge/api/quiz/create2";
  title: string = '';
  description: string = '';
  category: string = '';

  constructor(private httpClient: HttpClient) {
  }


  createQuiz(payload: any) : Observable<any> {
    return this.httpClient.post(this._url, payload, {
      withCredentials: true
    });
  }

}
