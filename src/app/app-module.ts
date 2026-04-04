import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StartScreen } from './components/start-screen/start-screen';
import { Question } from './components/question/question';
import { ResultScreen } from './components/result-screen/result-screen';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeToggle } from './components/theme-toggle/theme-toggle';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    StartScreen,
    Question,
    ResultScreen,
    ThemeToggle,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
