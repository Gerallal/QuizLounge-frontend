import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolveService {

  private baseUrl = 'http://localhost:8080/quizlounge/api/solve';

  constructor(private http: HttpClient) {}

  getAttempt(attemptId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/attempts/${attemptId}`, { withCredentials: true });
  }

  startAttempt(quizId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${quizId}`, { withCredentials: true });
  }

  evaluateAttempt(attemptId: number, answers: { [questionId: number]: string }): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/attempts/${attemptId}/evaluate`,
      answers,
      { withCredentials: true }
    );
  }
}
