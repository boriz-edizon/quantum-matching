export interface Question {
    name: string;
    stimulusLabel: string;
    reponseLabel: string;
    stimuli: {text: string, answer: string | null, userAnswer: string | null}[];
    response: {text: string}[];
}
