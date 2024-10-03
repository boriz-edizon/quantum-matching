import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SavePreviewComponent } from './pages/save-preview/save-preview.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"preview", component: SavePreviewComponent},
  {path:"quiz", component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
