import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Quiz} from '../../models/quiz-model';
import {HomeService} from '../home/home.service';
import {LoginService} from '../login/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-quizzes',
    imports: [
        FormsModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './all-quizzes.html',
  styleUrl: './all-quizzes.css',
})
export class AllQuizzes implements OnInit {

  activeTab: 'my' | 'shared' = 'my';

  // Daten
  myQuizzes: Quiz[] = [];
  sharedQuizzes: Quiz[] = [];
  filteredQuizzes: Quiz[] = [];

  // Filter
  searchTerm = '';
  selectedCategory = '';

  // Kategorien (fest)
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

    // Tab aus URL
    this.route.queryParams.subscribe(params => {
      this.activeTab = params['tab'] === 'shared' ? 'shared' : 'my';
      this.applyFilters();
    });

    // Quizze laden
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

  // Zentrale Filter-Logik
  applyFilters() {
    let source =
      this.activeTab === 'my'
        ? this.myQuizzes
        : this.sharedQuizzes;

    // Kategorie
    if (this.selectedCategory) {
      source = source.filter(q => q.category === this.selectedCategory);
    }

    // Suche
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      source = source.filter(q =>
        q.title.toLowerCase().includes(term)
      );
    }

    this.filteredQuizzes = source;
  }

  switchTab(tab: 'my' | 'shared') {
    this.activeTab = tab;
    this.applyFilters();
  }

}
