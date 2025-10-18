import React from 'react';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const getFeedbackMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) {
      return "Excellent! You're a true Gensyn expert!";
    }
    if (percentage >= 70) {
      return "Great job! You have a solid understanding of the protocol.";
    }
    if (percentage >= 50) {
      return "Good effort! You're on your way to mastering Gensyn.";
    }
    return "Thanks for playing! Check out the docs to learn more.";
  };

  return (
    <div className="bg-gensyn-gray/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-gensyn-warm-pink/10 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gensyn-beige to-gensyn-warm-pink">
        Quiz Complete!
      </h2>
      <p className="text-2xl text-gensyn-light-gray mb-2">
        You scored
      </p>
      <p className="text-5xl sm:text-6xl font-bold mb-6">
        {score} <span className="text-3xl text-gensyn-light-gray/80">/ {totalQuestions}</span>
      </p>
      <p className="text-lg text-white mb-8">{getFeedbackMessage()}</p>
      <button
        onClick={onRestart}
        className="px-8 py-3 bg-gradient-to-r from-gensyn-beige to-gensyn-warm-pink text-gensyn-black font-bold rounded-full shadow-lg hover:shadow-gensyn-warm-pink/40 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Play Again
      </button>
    </div>
  );
};

export default EndScreen;