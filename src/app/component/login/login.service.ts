import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from './model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private _url:string = "http://localhost:8080/quizlounge/api/login";

  private _testUrl:string = "http://localhost:8080/quizlounge/api/current-user";

  constructor(private httpClient:HttpClient) {

  }

  /**login(params:any):Observable<any> {
    return this.httpClient.post<any>(this._url, params);
  }**/

  login(username: string, password: string):Observable<any> {
    return this.httpClient.post(this._url, { username, password }, {
      withCredentials: true
    });
  }

  testLogin() : Observable<any> {
    return this.httpClient.get(this._testUrl, {
      withCredentials: true
    });
  }

  userLogin() : Observable<any> {
    return this.httpClient.get(this._testUrl + '/zwei', {
      withCredentials: true
    });
  }

}
