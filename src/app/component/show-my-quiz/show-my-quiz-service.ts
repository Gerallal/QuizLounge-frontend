import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Quiz } from '../../models/quiz-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ShowMyQuizService {
  _url = "http://localhost:8080/quizlounge/api/";

  constructor(private httpClient:HttpClient) {}

  getQuizToSolve(quizId: number) {
    return this.httpClient.get<Quiz>(this._url + "quiz/myQuiz/solve/" + quizId, {
      withCredentials: true
    })
  }

  shareQuizWithFriend(quiz_id: number, friend_id: number) {
    return this.httpClient.post(this._url + "quiz/myQuiz/share/" + quiz_id + "/" + friend_id,
      {},
      {
        withCredentials: true,
        responseType: "text"
      })
  }

  deleteQuiz(quizId: number) {
    return this.httpClient.delete(this._url + "quiz/myQuiz/" + quizId, {
      withCredentials: true }
    );
  }

  getAttempt(attemptId: number): Observable<any> {
    return this.httpClient.get(`${this._url}solve/attempts/${attemptId}`,
      { withCredentials: true });
  }

  startAttempt(quizId: number): Observable<any> {
    return this.httpClient.get(`${this._url}solve/${quizId}`,
      { withCredentials: true });
  }

  evaluateAttempt(attemptId: number, answers: any): Observable<any> {
    console.log("questionId" + answers);
    return this.httpClient.post(
      `${this._url}solve/attempts/${attemptId}/evaluate`,
      answers,
      { withCredentials: true }
    );
  }

}
