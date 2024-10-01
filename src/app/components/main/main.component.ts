import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/interfaces/question';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router, private questionService: QuestionsService){}

  goToPreviewPage(){
    this.router.navigate(["preview"])
  }

  // Add a new stimulus to the list
  addStimulus() {
    const stimulusText = '';
    const stimulusAnswer = '';
    this.questionService.addStimulus(0, stimulusText, stimulusAnswer);
    console.log(this.getQuestion(0))
  }

  // Delete a stimulus by index
  deleteStimulus(stimulusIndex: number) {
    this.questionService.removeStimulus(0, stimulusIndex);
  }

  // Add a new stimulus to the list
  addResponse() {
    const responseText = '';
    this.questionService.addResponse(0, responseText);
  }

  // Delete a stimulus by index
  deleteResponse(responseIndex: number) {
    this.questionService.removeResponse(0, responseIndex);
  }

  // Get the questions for display in the template
  getQuestion(index: number): Question  {
    return this.questionService.getQuestion(index);
  }
}
