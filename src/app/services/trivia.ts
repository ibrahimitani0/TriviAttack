import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  all_answers: string[]; // we will add this
}

@Injectable({
  providedIn: 'root'
})

export class Trivia {

  private questions: TriviaQuestion[] = [];
  private questionsSubject = new BehaviorSubject<TriviaQuestion[]>([]);

  constructor(private http: HttpClient) {}

  fetchQuestions(categoryId: number, difficulty: string): Observable<TriviaQuestion[]> {
    let params = new HttpParams()
      .set('amount', '10')
      .set('category', categoryId.toString())
      .set('difficulty', difficulty)
      .set('type', 'multiple');

    return this.http.get<any>('https://opentdb.com/api.php', { params }).pipe(
      map(response => {
        return response.results.map((q: any) => ({
          ...q,
          all_answers: this.shuffleAnswers([q.correct_answer, ...q.incorrect_answers])
        }));
      })
    );
  }

  setQuestions(questions: TriviaQuestion[]) {
    this.questions = questions;
    this.questionsSubject.next(this.questions);
  }

  getQuestions(): Observable<TriviaQuestion[]> {
    return this.questionsSubject.asObservable();
  }

  private shuffleAnswers(answers: string[]): string[] {
    return answers
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  }

}
