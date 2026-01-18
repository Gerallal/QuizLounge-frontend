import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FriendsService} from './friends.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-friends',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,

  ],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends implements OnInit {
  friend: string = "";
  dataSource:MatTableDataSource<any> = new MatTableDataSource();
  friendRequests:any[] = [];

  displayedColumns: string[] = ['sender', 'decline', 'accept'];


  constructor(private friendsService: FriendsService) {
  }

  ngOnInit() {
    this.loadData();
  }

  onSubmit() {
    this.friendsService.sendFriendRequest(this.friend).subscribe({
      next: () => {
        this.friend = '';
        this.loadData();
      }
    });
  }

  private loadData() {
    this.friendsService.retrieveAllFriendRequests().subscribe({
      next: (response) => {
        this.friendRequests = response.data;
        this.dataSource.data = response.data;
        console.log(response.data);
      },
    })
  }

  accept(i:number) {
    console.log(i);
    this.friendsService.acceptFriendRequest(this.friendRequests[i].id).subscribe({
      next: () => {
        this.removeRequest(i);
        }
    });
  }

  decline(i:number) {
    this.friendsService.declineFriendRequest(this.friendRequests[i].id).subscribe({
      next: () => {
        this.removeRequest(i);
        }
    });
  }

  private removeRequest(i:number) {
    this.friendRequests.splice(i, 1);
    this.dataSource.data = [...this.friendRequests];
  }

}
