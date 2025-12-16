import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {FriendProfileService} from './friend-profile-service';
import { User } from '../../models/user-model';
import { Quiz } from '../../models/quiz-model';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgForOf],
  templateUrl: './friend-profile.html',
  styleUrl: './friend-profile.css',
})

export class FriendProfile implements OnInit{
  friend!: User;
  currentUser!: User;
  receivedQuizzes: Quiz[] = [];


  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private friendProfileService: FriendProfileService,
    private router: Router,
  ) {}

  ngOnInit() {
    const friendId = Number(this.route.snapshot.paramMap.get('id'));

    this.loginService.userLogin().subscribe(user => {
      this.currentUser = user;
    });

    this.friendProfileService.getFriendProfile(friendId).subscribe(friend => {
      this.friend = friend;
    });

    this.friendProfileService.getFriendQuizzes(friendId).subscribe(quizzes => {
      this.receivedQuizzes = quizzes;
    });
  }

  deleteFriend() {
    if (!this.friend) return;

      this.friendProfileService.deleteFriend(this.friend.id).subscribe({
        next: () => {
          console.log("Freund gelöscht!");
        },
        error: (err: any) => console.error(err)
      })
    }

  private openTheirQuiz(quiz: Quiz) {
    console.log(quiz);
    console.log(quiz.id);
    this.router.navigate(['/myQuiz/', quiz.id]);
  }

  protected readonly console = console;
}
