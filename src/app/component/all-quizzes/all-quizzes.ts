import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {HomeService} from '../home/home.service';
import {LoginService} from '../login/login.service';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from '../../models/quiz-model';

@Component({
  selector: 'app-all-quizzes',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    DecimalPipe
  ],
  templateUrl: './all-quizzes.html',
  styleUrl: './all-quizzes.css',
})
export class AllQuizzes implements OnInit {

  activeTab!: 'my' | 'shared';

  myQuizzes: Quiz[] = [];
  sharedQuizzes: Quiz[] = [];
  filteredQuizzes: Quiz[] = [];

  searchTerm = '';
  selectedCategory = '';

  categories: string[] = [
    'Allgemein',
    'Mathematik',
    'Deutsch',
    'Englisch',
    'Biologie',
    'Chemie',
    'Physik',
    'Informatik',
    'Geographie',
    'Geschichte',
    'Politik'
  ];

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.activeTab = params['tab'] === 'shared' ? 'shared' : 'my';
      this.applyFilters();
    });

    this.loginService.userLogin().subscribe(user => {

      this.homeService.getMyQuiz(user.id).subscribe(my => {
        this.myQuizzes = my;
        this.applyFilters();
      });

      this.homeService.getSentQuizzesOfMyFriends(user.id).subscribe(shared => {
        this.sharedQuizzes = shared;
        this.applyFilters();
      });

    });
  }

  applyFilters() {
    let source =
      this.activeTab === 'my'
        ? this.myQuizzes
        : this.sharedQuizzes;

    if (this.selectedCategory) {
      source = source.filter(q => q.category === this.selectedCategory);
    }

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      source = source.filter(q =>
        q.title.toLowerCase().includes(term)
      );
    }

    this.filteredQuizzes = source;
  }


}
