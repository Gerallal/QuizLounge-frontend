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

  showStats = false;
  statsData: any[] = [];
  groupedQuizzes: any[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsService.getStatsOfAQuiz().subscribe(data => {
      this.statsData = data;
    });
  }

  showResults() {
  this.showStats = true;
  const grouped = this.groupByQuiz(this.statsData);
  this.groupedQuizzes = Object.values(grouped);

  setTimeout(() => this.renderCharts());
}


  private renderCharts() {
  // statsData → gruppieren
  const quizzes = this.groupByQuiz(this.statsData);

  // in Array umwandeln (wichtig!)
  const quizList = Object.values(quizzes);

  quizList.forEach((quiz: any) => {

    const traces = this.createUserTraces(quiz.attempts) as Plotly.Data[];

    Plotly.newPlot(
      `chart-${quiz.quizId}`,
      traces,
      {
        title: {
          text: quiz.quizTitle
        },
        xaxis: {
          title: {
            text: 'Datum und Uhrzeit'
          },
          type: 'date'
        },
        yaxis: {
          title: {
            text: 'Richtige Antworten'
          },
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
