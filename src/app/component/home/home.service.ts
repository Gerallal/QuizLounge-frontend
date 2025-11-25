import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _url:string = "http://localhost:8080/quizlounge/api/home/";


  constructor(private httpClient:HttpClient) {
  }

  getFriends(userId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this._url  + userId + "/friends", {
      withCredentials: true
    });
  }
}
