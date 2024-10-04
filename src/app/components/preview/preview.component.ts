import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LineDrawingService } from 'src/app/services/lineDrawing/line-drawing.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  constructor(private router: Router, private questionService: QuestionsService, private lineDrawingService: LineDrawingService){}

  goToHomePage(){
    this.router.navigate([""])
  }

  // Get the questions for display in the template
  getQuestion(index: number) {
    console.log(this.questionService.getQuestion(index))
    return this.questionService.getQuestion(index);
  }

  ngAfterViewInit() {
    const svg = document.querySelector('svg') as SVGElement;
    this.lineDrawingService.initSvg(svg); 
    
    document.addEventListener('mousemove', (e: MouseEvent) => this.lineDrawingService.drawLine(e));
    document.addEventListener('mouseup', (e: MouseEvent) => this.lineDrawingService.endLine(e));
  }

  onMouseDown(event: MouseEvent) {
    this.lineDrawingService.startLine(event, true);
  }
}
