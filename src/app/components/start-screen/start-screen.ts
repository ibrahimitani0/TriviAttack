import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trivia } from '../../services/trivia';

@Component({
  selector: 'app-start-screen',
  standalone: false,
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.css'
})
export class StartScreen {

   form: FormGroup;

  categories = [
    { id: 9, name: 'General Knowledge' },
    { id: 21, name: 'Sports' },
    { id: 23, name: 'History' },
    { id: 17, name: 'Science & Nature' },
    { id: 15, name: 'Entertainment: Video Games' },
  ];

  difficulties = ['easy', 'medium', 'hard'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private trivia: Trivia
  ) {
    this.form = this.fb.group({
      category: [this.categories[0].id],
      difficulty: [this.difficulties[0]]
    });
  }

  startQuiz() {
    const { category, difficulty } = this.form.value;
    this.trivia.fetchQuestions(category, difficulty).subscribe({
      next: (questions) => {
        this.trivia.setQuestions(questions);
        this.router.navigate(['/quiz']);
      },
      error: (err) => {
        alert('Failed to load questions. Please try again.');
        console.error(err);
      }
    });
  }

}
