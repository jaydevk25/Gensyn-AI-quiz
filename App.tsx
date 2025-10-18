import React, { useState, useEffect, useCallback } from 'react';
import type { QuizState, Question } from './types';
import { ALL_QUESTIONS, TOTAL_QUESTIONS_PER_SESSION } from './constants';
import Header from './components/Header';
import QuizStartScreen from './components/QuizStartScreen';
import QuestionCard from './components/QuestionCard';
import EndScreen from './components/EndScreen';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const shuffleAndSelectQuestions = useCallback(() => {
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, TOTAL_QUESTIONS_PER_SESSION));
  }, []);

  useEffect(() => {
    shuffleAndSelectQuestions();
  }, [shuffleAndSelectQuestions]);

  const startQuiz = () => {
    setQuizState('active');
    setCurrentQuestionIndex(0);
    setScore(0);
    shuffleAndSelectQuestions();
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizState('end');
    }
  };

  const restartQuiz = () => {
    setQuizState('start');
  };

  const renderContent = () => {
    switch (quizState) {
      case 'start':
        return <QuizStartScreen onStart={startQuiz} />;
      case 'active':
        return questions.length > 0 && (
          <QuestionCard
            key={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={TOTAL_QUESTIONS_PER_SESSION}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        );
      case 'end':
        return <EndScreen score={score} totalQuestions={TOTAL_QUESTIONS_PER_SESSION} onRestart={restartQuiz} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gensyn-black bg-grid-white/[0.05] relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gensyn-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <img
          src="https://cdn.prod.website-files.com/66bc6da8fe284e4693088ff7/66bc6da8fe284e4693088ffe_Gensyn-Symbol.svg"
          alt="Gensyn Background Symbol"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain animate-pulse-glow z-0"
        />
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-2xl">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;