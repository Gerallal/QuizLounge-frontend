import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Rating} from '../../models/rating-model';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  private baseUrl = 'http://localhost:8080/quizlounge/api/stats'

  constructor(private http: HttpClient) {}

  getStatsOfAQuiz(): Observable<any> {
    return this.http.get(`${this.baseUrl}/statsOfMyQuizzes`, {withCredentials: true})
  }
  getMyStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/myStats`, {withCredentials: true})
  }

  getRatingsOfMyQuizzes(): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.baseUrl}/stats`, {
      withCredentials: true
    });
  }

}
