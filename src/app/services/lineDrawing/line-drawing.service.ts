import { Injectable } from '@angular/core';
import { QuestionsService } from '../questions/questions.service';

@Injectable({
  providedIn: 'root'
})
export class LineDrawingService {

  private svg: SVGElement | null = null;
  private startItem: HTMLElement | null = null;
  private line: SVGLineElement | null = null;
  private studentInput: boolean = false;

  constructor(private questionService: QuestionsService) {}

  initSvg(svgElement: SVGElement) {
    this.svg = svgElement;
  }

  startLine(e: MouseEvent, studentInput: boolean) {
    this.studentInput = studentInput;
    this.startItem = e.target as HTMLElement;

    console.log(this.startItem.getAttribute("data"))

    if (!this.svg || !this.startItem) return;

    // Create an SVG line element when the user clicks an item
    this.line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const svgRect = this.svg.getBoundingClientRect();
    
    this.line.setAttribute('x1', (e.clientX - svgRect.left).toString());
    this.line.setAttribute('y1', (e.clientY - svgRect.top).toString());
    this.line.setAttribute('x2', (e.clientX - svgRect.left).toString());
    this.line.setAttribute('y2', (e.clientY - svgRect.top).toString());
    this.line.setAttribute('stroke', 'black');
    this.line.setAttribute('stroke-width', '2');

    this.svg.appendChild(this.line);
  }

  drawLine(e: MouseEvent) {
    if (this.line && this.svg) {
      const svgRect = this.svg.getBoundingClientRect();

      // Update the position of the line as the mouse moves
      this.line.setAttribute('x2', (e.clientX - svgRect.left).toString());
      this.line.setAttribute('y2', (e.clientY - svgRect.top).toString());
    }
  }

  endLine(e: MouseEvent) {
    if (!this.line || !this.svg) return;

    const endItem = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;

    // Check if the end point is a valid target and is different from the start point
    if (endItem && endItem.classList.contains('circle-target-right') && endItem !== this.startItem) {
      const svgRect = this.svg.getBoundingClientRect();

      this.line.setAttribute('x2', (e.clientX - svgRect.left).toString());
      this.line.setAttribute('y2', (e.clientY - svgRect.top).toString());


      this.studentInput? this.findMatchingStimuli().userAnswer = endItem.getAttribute("data") : this.findMatchingStimuli().answer = endItem.getAttribute("data");

      console.log(this.questionService.getQuestion(0))

      // Check if the matched pair is correct
      // if (this.startItem?.dataset.value === endItem.dataset.value) {
      //   this.line.setAttribute('stroke', 'green'); // Correct match
      // } else {
      //   this.line.setAttribute('stroke', 'red'); // Incorrect match
      // }
    } else {
      // If the line was not connected to a valid target, remove the line
      this.svg.removeChild(this.line);
    }

    // Reset the state
    this.startItem = null;
    this.line = null;
  }

  findMatchingStimuli(): { text: string; answer: string | null; userAnswer: string | null} {
    return this.questionService.getQuestion(0).stimuli.filter(stimulus => stimulus.text == this.startItem?.getAttribute('data'))[0];
  }
}
