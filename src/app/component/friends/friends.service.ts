import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FriendsService {

  private _url: string = "http://localhost:8080/quizlounge/api/friends/";

  constructor(private httpClient: HttpClient) {}

  sendFriendRequest(friend: string): Observable<any> {
    return this.httpClient.get(this._url + "friend-request", {
      params: {friend: friend},
      withCredentials: true
    });
  }

  retrieveAllFriendRequests(): Observable<any> {
    return this.httpClient.get(this._url + "requests-for-user", {withCredentials: true});
  }

  acceptFriendRequest(requestID: number) {
    return this.httpClient.get(
      this._url + "accept-friend-request/" + requestID + "/",
      {withCredentials: true}
    );
  }

  declineFriendRequest(requestID: number) {
    return this.httpClient.get(
      this._url + "decline-friend-request/" + requestID + "/",
      {withCredentials: true}
    );
  }

}
