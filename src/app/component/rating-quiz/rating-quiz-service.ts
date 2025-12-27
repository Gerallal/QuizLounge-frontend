import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingQuizService {
  private baseUrl = 'http://localhost:8080/quizlounge/api/solve';

  constructor(private http: HttpClient) {}

  saveRating(quizId: number, rating: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${quizId}/rating`, { rating: rating }, {withCredentials: true})
  }
}
