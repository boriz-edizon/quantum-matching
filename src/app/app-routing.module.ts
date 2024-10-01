import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SavePreviewComponent } from './pages/save-preview/save-preview.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"preview", component: SavePreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
