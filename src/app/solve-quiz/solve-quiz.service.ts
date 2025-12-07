import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnswer } from './model/solve-quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolveQuizService {

  private apiURL = 'http://localhost:8080/quizlounge/api'

  constructor(private http: HttpClient) {}

  evaluateAnswer(data: IAnswer): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiURL}/solveQuiz/evaluateAnswer`, data, {withCredentials: true} );
  }
  
}
