import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/interfaces/question';
import { LineDrawingService } from 'src/app/services/lineDrawing/line-drawing.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router, private questionService: QuestionsService, private lineDrawingService: LineDrawingService){}

  goToPreviewPage(){
    this.router.navigate(["preview"])
  }

  // Add a new stimulus to the list
  addStimulus() {
    const stimulusText = '';
    const stimulusAnswer = '';
    const userAnswer = '';
    this.questionService.addStimulus(0, stimulusText, stimulusAnswer, userAnswer);
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

  ngAfterViewInit() {
    const svg = document.querySelector('svg') as SVGElement;
    this.lineDrawingService.initSvg(svg); 
    
    document.addEventListener('mousemove', (e: MouseEvent) => this.lineDrawingService.drawLine(e));
    document.addEventListener('mouseup', (e: MouseEvent) => this.lineDrawingService.endLine(e));
  }

  onMouseDown(event: MouseEvent) {
    this.lineDrawingService.startLine(event, false);
  }
}
