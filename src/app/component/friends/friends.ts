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
  public friend: string = "";
  dataSource:MatTableDataSource<any> = new MatTableDataSource();
  friendRequests:any[] = [];

  displayedColumns: string[] = ['sender', 'delete'];


  constructor(private friendsService: FriendsService) {
  }

  ngOnInit() {
    this.loadData();
  }

  onSubmit() {
    this.friendsService.sendFriendRequest(this.friend).subscribe({
      next: (result) => {console.log(result);},
    })
  }

  private loadData() {
    this.friendsService.retrieveAllFriendRequests().subscribe({
      next: (response) => {
        this.dataSource = response.data;
        this.friendRequests = response.data;
        console.log(response.data);
      },
    })
  }

  accept(i:number) {
    console.log(this.friendRequests[i].id);
  }
}
