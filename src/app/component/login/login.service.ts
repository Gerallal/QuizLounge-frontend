import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from './model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private _url:string = "http://localhost:8080/quizlounge/api/login";

  constructor(private httpClient:HttpClient) {

  }

  login(params:any):Observable<any> {
    return this.httpClient.post<any>(this._url, params);
  }
  
}
