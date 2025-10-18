import React, { useState, useEffect } from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, onAnswer, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    onAnswer(index === question.correctAnswer);
  };
  
  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'border-white/20 bg-white/5 hover:bg-white/10';
    }
    if (index === question.correctAnswer) {
      return 'border-green-500/50 bg-green-500/20 text-white animate-pulse';
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'border-red-500/50 bg-red-500/20 text-white';
    }
    return 'border-white/20 bg-white/5 opacity-50';
  };

  return (
    <div className="bg-gensyn-gray/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-gensyn-warm-pink/10 animate-slide-in">
      <div className="mb-6">
        <p className="text-gensyn-light-gray mb-2">Question {questionNumber} of {totalQuestions}</p>
        <h3 className="text-xl sm:text-2xl font-semibold">{question.question}</h3>
      </div>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-300 transform hover:scale-[1.02] ${getButtonClass(index)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {(isAnswered || questionNumber === totalQuestions) && (
         <div className="mt-8 text-center">
            <button
              onClick={onNext}
              className="px-8 py-3 bg-gradient-to-r from-gensyn-beige to-gensyn-warm-pink text-gensyn-black font-bold rounded-full shadow-lg hover:shadow-gensyn-warm-pink/40 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {questionNumber === totalQuestions ? 'Finish' : 'Next'}
            </button>
         </div>
      )}
       {!isAnswered && questionNumber < totalQuestions && (
         <div className="mt-8 text-center">
             <button
              onClick={onNext}
              className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out"
            >
              Skip
            </button>
         </div>
       )}
    </div>
  );
};

export default QuestionCard;