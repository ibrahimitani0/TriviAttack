import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-screen',
  standalone: false,
  templateUrl: './result-screen.html',
  styleUrl: './result-screen.css'
})
export class ResultScreen {
score: number = 0;
  total: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { score: number; total: number };

    if (state) {
      this.score = state.score;
      this.total = state.total;
    } else {
      // If score data is missing, redirect back to start
      this.router.navigate(['/']);
    }
  }

  restartQuiz() {
    this.router.navigate(['/']);
  }
}
