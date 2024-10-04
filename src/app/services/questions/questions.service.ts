import { Injectable } from '@angular/core';
import { Question } from '../../interfaces/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [{
    name:  "",
    stimulusLabel: "",
    reponseLabel: "",
    stimuli: [{text: "", answer: "", userAnswer: ""}],
    response: [{text: ""}]
  }];
  
  constructor() { }
  // Add a new question
  addQuestion(question: Question) {
    this.questions.push(question);
  }

  // Get all questions
  getQuestion(index: number): Question {
    return this.questions[index];
  }

  // Delete a question by index
  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  // Add a stimulus to a specific question
  addStimulus(questionIndex: number, stimulusText: string, stimulusAnswer: string, userAnswer: string) {
    const question = this.questions[questionIndex];
    question.stimuli.push({ text: stimulusText, answer: stimulusAnswer, userAnswer: userAnswer });
  }

  // Remove a stimulus from a specific question by stimulus index
  removeStimulus(questionIndex: number, stimulusIndex: number) {
    const question = this.questions[questionIndex];
    question.stimuli.splice(stimulusIndex, 1);
  }

  // Add a response to a specific question
  addResponse(questionIndex: number, responseText: string) {
    const question = this.questions[questionIndex];
    question.response.push({text: responseText});
  }

  // Remove a response from a specific question by response index
  removeResponse(questionIndex: number, responseIndex: number) {
    const question = this.questions[questionIndex];
    question.response.splice(responseIndex, 1);
  }
}
