import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HomeService, Quiz, User} from '../component/home/home.service';
import {LoginService} from '../component/login/login.service';
import {ShowMyQuizService} from './show-my-quiz-service';
import {NgForOf, NgIf} from '@angular/common';
import {Question} from '../create-quiz2/create-quiz2';
import {Router} from '@angular/router';
import {CreateQuizService2} from '../create-quiz2/create-quiz-service';

@Component({
  selector: 'app-home',
  imports: [NgForOf],
  templateUrl: './show-my-quiz.html',
  styleUrl: './show-my-quiz.css',
})

export class ShowMyQuiz implements OnInit{
  currentUser!: User;
  myQuiz: Quiz[] = [];

  public formData: Quiz[] = [
    {
      id: 1,
      title: '',
      description: '',
      category: ''
    }]

  constructor(private router: Router,
              private showMyQuizService: ShowMyQuizService,
              private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.loadMyQuizzes();
  }

  private loadMyQuizzes() {
    this.loginService.userLogin().subscribe({
      next: (user) => {
        this.currentUser = user;
        //console.log('Eingeloggt als:', user);

        this.showMyQuizService.getMyQuiz(user.id).subscribe({
          next: (response) => {
            this.myQuiz = response;
          }
        });
      }
    });
  }
}
