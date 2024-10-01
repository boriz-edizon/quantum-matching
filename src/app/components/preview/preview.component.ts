import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  constructor(private router: Router, private questionService: QuestionsService){}

  goToHomePage(){
    this.router.navigate([""])
  }

  // Get the questions for display in the template
  getQuestion(index: number) {
    console.log(this.questionService.getQuestion(index))
    return this.questionService.getQuestion(index);
  }
}
