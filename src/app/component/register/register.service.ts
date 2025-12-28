import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RegisterService {

  private _url: string = "http://localhost:8080/quizlounge/api/register";


  constructor(private httpClient:HttpClient) {}

  register(username:string, password:string): Observable<any> {
    return this.httpClient.post(this._url, {username, password}, {
      withCredentials: true
    });
  }
}
