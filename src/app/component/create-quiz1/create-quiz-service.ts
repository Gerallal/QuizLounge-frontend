import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateQuizService {

  _url = "http://localhost:8080/quizlounge/api/quiz";

  quizId: number | null = null;

  constructor(private httpClient: HttpClient) {
  }


  createQuiz(title:string, description:string, category:string) : Observable<any> {
    return this.httpClient.post(`${this._url}/create1`,
      {title, description, category},
      {withCredentials: true});
  }

}
