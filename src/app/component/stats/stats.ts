import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';
import { StatsService } from './stats-service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
})
export class Stats implements OnInit {
  showQuizStats = false;
  showMyStats = false;
  statsDataOFMyQuizzes: any[] = []; // Stats meiner erstellten Quizze
  myStatsData: any[] = [];          // Meine eigenen Stats
  groupedQuizzes: any[] = [];       // Daten für die Charts

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    // Stats meiner erstellten Quizze
    this.statsService.getStatsOfAQuiz().subscribe(data => {
      this.statsDataOFMyQuizzes = data;
    });

    // Meine eigenen Stats
    this.statsService.getMyStats().subscribe(data => {
      this.myStatsData = data;
    });
  }


  showQuizResults() {
    this.showQuizStats = true;
    this.showMyStats = false;

    const grouped = this.groupByQuiz(this.statsDataOFMyQuizzes);
    this.groupedQuizzes = Object.values(grouped);

    setTimeout(() => this.renderCharts());
  }

  showMyResults() {
    this.showMyStats = true;
    this.showQuizStats = false;

    const grouped = this.groupByQuiz(this.myStatsData);
    this.groupedQuizzes = Object.values(grouped);

    setTimeout(() => this.renderCharts());
  }

  hideStats() {
    this.showQuizStats = false;
    this.showMyStats = false;
    this.groupedQuizzes = [];
  }

  private renderCharts() {
    this.groupedQuizzes.forEach((quiz: any) => {

      const traces = this.createUserTraces(quiz.attempts) as Plotly.Data[];

      Plotly.newPlot(
        `chart-${quiz.quizId}`,
        traces,
        {
          title: {
            text: quiz.quizTitle
          },
          xaxis: {
            title: { text: 'Datum und Uhrzeit' },
            type: 'date'
          },
          yaxis: {
            title: { text: 'Richtige Antworten' },
            range: [0, quiz.attempts[0].totalQuestions],
            rangemode: 'tozero',
            tickmode: 'linear',
            tick0: 0,
            dtick: 1
          },
          hovermode: 'x unified'
        }
      );
    });
  }


  private createUserTraces(attempts: any[]) {
    const users: any = {};

    attempts.forEach(a => {
      if (!users[a.username]) {
        users[a.username] = {
          x: [],
          y: [],
          name: a.username,
          type: 'scatter',
          mode: 'lines+markers'
        };
      }

      users[a.username].x.push(a.finishedAt);
      users[a.username].y.push(a.numberOfRightAnswers);
    });

    return Object.values(users);
  }

  private groupByQuiz(data: any[]) {
    const result: any = {};

    data.forEach(entry => {
      if (!result[entry.quizId]) {
        result[entry.quizId] = {
          quizId: entry.quizId,
          quizTitle: entry.quizTitle,
          attempts: []
        };
      }
      result[entry.quizId].attempts.push(entry);
    });

    return result;
  }
}
