import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../../models/quiz-model';

@Injectable({
  providedIn: 'root',
})

export class EditQuizService {
  _url = "http://localhost:8080/quizlounge/api/quiz/";

  constructor(private httpClient: HttpClient) {}

  getMyQuiz(quiz_id: number) {
    return this.httpClient.get<Quiz>(this._url + 'myQuiz/' + quiz_id, {
      withCredentials: true
    })
  }

  editQuiz(quizId: number, payload: any) {
    return this.httpClient.put(this._url + 'myQuiz/edit/' + quizId, payload, {
      withCredentials: true
    });
  }
}
