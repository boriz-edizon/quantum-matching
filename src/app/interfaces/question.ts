export interface Question {
    name: string;
    stimulusLabel: string;
    reponseLabel: string;
    stimuli: {text: string, answer: string}[];
    response: {text: string}[];
}
