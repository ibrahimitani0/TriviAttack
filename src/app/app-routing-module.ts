import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreen } from './components/start-screen/start-screen';
import { Question } from './components/question/question';
import { ResultScreen } from './components/result-screen/result-screen';

const routes: Routes = [
  { path: '', component: StartScreen },
  { path: 'quiz', component: Question },
  { path: 'result', component: ResultScreen },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
