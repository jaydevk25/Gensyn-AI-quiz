import React from 'react';
import { TOTAL_QUESTIONS_PER_SESSION } from '../constants';

interface QuizStartScreenProps {
  onStart: () => void;
}

const QuizStartScreen: React.FC<QuizStartScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-gensyn-gray/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-gensyn-warm-pink/10 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gensyn-beige to-gensyn-warm-pink">
        Test Your Gensyn Knowledge
      </h2>
      <p className="text-gensyn-light-gray mb-8">
        Challenge yourself with a quiz on the world's first trustless Layer 1 for AI compute.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-lg">
          Total Questions: <span className="font-bold text-gensyn-warm-pink">{TOTAL_QUESTIONS_PER_SESSION}</span>
        </div>
        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-gensyn-beige to-gensyn-warm-pink text-gensyn-black font-bold rounded-full shadow-lg hover:shadow-gensyn-warm-pink/40 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizStartScreen;