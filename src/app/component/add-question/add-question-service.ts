import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddQuestionService {


  private _url:string = "http://localhost:8080/quizlounge/api/question";


  constructor(private httpClient:HttpClient) { }

  addQuestion(question: any ) : Observable<any> {
    return this.httpClient.post(this._url, question, {
      withCredentials: true
    });
  }
}
