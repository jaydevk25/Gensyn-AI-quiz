
export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export type QuizState = 'start' | 'active' | 'end';
