import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

export interface User {
  id: number;
  username: string;
}

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
export class HomeService {
  private _url1:string = "http://localhost:8080/quizlounge/api/home/";
  private _url2:string = "http://localhost:8080/quizlounge/api/quiz/home/";

  constructor(private httpClient:HttpClient) {
  }

  getFriends(userId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this._url1  + userId + "/friends", {
      withCredentials: true
    });
  }

  getMyQuiz(author_id: number): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(this._url2 + author_id + "/create1", {
      withCredentials: true
    })
  }
}
