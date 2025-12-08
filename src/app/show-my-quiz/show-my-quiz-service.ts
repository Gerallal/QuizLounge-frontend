import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

export interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  questions: Question[];
}

export interface Question {
  questionName: string;
  typeOfQuestion: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  correct: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class ShowMyQuizService {
  _url = "http://localhost:8080/quizlounge/api/quiz/myQuiz/";

  constructor(private httpClient:HttpClient) {}

  getMyQuiz(quiz_id: number) {
    return this.httpClient.get<Quiz>(this._url + quiz_id, {
      withCredentials: true
    })
  }
}
