import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';
import { StatsService } from './stats-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats{
  quizStats: any = {title: '', attempt: []}

  constructor(private router: Router, private statsService: StatsService, private route: ActivatedRoute) {}

  showStats = false;

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('quizId'))
    this.statsService.getStatsOfAQuiz(quizId).subscribe(data => {console.log(data)})
  }

  showResults() {
    this.showStats = true;

    setTimeout(() => {
      Plotly.newPlot('chart', [
        {
          x: ['Richtig', 'Falsch'],
          y: [7, 3],
          type: 'bar'
        }
      ], {
        title: {
          text: 'In den Quizzen hast du so abgeschnitten'
        }
      });
    });
  }
}
