import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {User} from '../../models/user-model';
import {LoginService} from '../login/login.service';
import {HomeService} from '../home/home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-friends',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgIf],
  templateUrl: './all-friends.html',
  styleUrl: './all-friends.css',
})
export class AllFriends implements OnInit {
  friends: User[] = [];
  filteredFriends: User[] = [];
  searchTerm = '';

  constructor(
    private loginService: LoginService,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFriends();
  }

  loadFriends() {
    this.loginService.userLogin().subscribe({
      next: (user) => {
        this.homeService.getFriends(user.id).subscribe({
          next: (friends) => {
            this.friends = friends;
            this.filteredFriends = friends;
          }
        });
      }
    });
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase();

    this.filteredFriends = this.friends.filter(friend =>
      friend.username.toLowerCase().includes(term)
    );
  }

  openFriend(id: number) {
    this.router.navigate(['/friend', id]);
  }
}
