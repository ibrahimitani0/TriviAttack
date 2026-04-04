import { Component, OnInit } from '@angular/core';
import { Trivia, TriviaQuestion } from '../../services/trivia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: false,
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {
questions: TriviaQuestion[] = [];
  currentIndex = 0;
  currentQuestion?: TriviaQuestion;
  selectedAnswer = '';
  score = 0;
  answered = false;

  constructor(private trivia: Trivia, private router: Router) {}

  ngOnInit(): void {
    this.trivia.getQuestions().subscribe(questions => {
      if (questions.length === 0) {
        // No questions loaded, redirect back to start
        this.router.navigate(['/']);
        return;
      }
      this.questions = questions;
      this.currentQuestion = this.questions[this.currentIndex];
    });
  }

  selectAnswer(answer: string) {
    if (this.answered) return; // Prevent multiple answers

    this.selectedAnswer = answer;
    this.answered = true;

    if (answer === this.currentQuestion?.correct_answer) {
      this.score++;
    }
  }

  nextQuestion() {
    this.answered = false;
    this.selectedAnswer = '';
    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      // Quiz finished, navigate to result screen and pass score
      this.router.navigate(['/result'], { state: { score: this.score, total: this.questions.length } });
    } else {
      this.currentQuestion = this.questions[this.currentIndex];
    }
  }

  // Decode HTML entities from API (like &quot;)
  decodeHtml(html: string) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
