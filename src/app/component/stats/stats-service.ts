import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  private baseUrl = 'http://localhost:8080/quizlounge/api/stats'

  constructor(private http: HttpClient) {}

  getStatsOfAQuiz(quizId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${quizId}`, {withCredentials: true})
  }
  
}
