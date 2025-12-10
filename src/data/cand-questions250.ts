export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  image?: string;
}

export const candQuestions250: Question[] = [
  {
    id: 1,
    question: "Biển báo này có ý nghĩa gì?",
    image: "https://example.com/traffic-signs/stop-sign.png",
    answers: ["Dừng lại", "Giảm tốc", "Nhường đường"],
    correctAnswer: 2,
  },
];
