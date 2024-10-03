import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { PreviewComponent } from './components/preview/preview.component';
import { SavePreviewComponent } from './pages/save-preview/save-preview.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizViewComponent } from './components/quiz-view/quiz-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    PreviewComponent,
    SavePreviewComponent,
    QuizComponent,
    QuizViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
