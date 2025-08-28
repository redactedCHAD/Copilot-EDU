import React, { useState } from 'react';
import type { QuizBlockData } from '../../types';

interface QuizBlockProps {
  data: any;
}

const QuizBlock: React.FC<QuizBlockProps> = ({ data }) => {
  const { question, options, correctAnswerIndex } = data as QuizBlockData;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const getOptionClasses = (index: number) => {
    if (!isAnswered) {
      return 'border-border hover:border-primary hover:bg-primary/10';
    }
    if (index === correctAnswerIndex) {
      return 'border-green-500 bg-green-500/10 text-green-300';
    }
    if (index === selectedOption) {
      return 'border-red-500 bg-red-500/10 text-red-300';
    }
    return 'border-border text-gray-500';
  };

  return (
    <div className="my-8 p-6 bg-surface shadow-md rounded-lg">
      <h3 className="font-bold text-lg text-text-primary mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 border-2 rounded-md transition-all ${getOptionClasses(index)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && selectedOption !== correctAnswerIndex && (
        <p className="mt-4 text-sm text-red-400">Not quite. The correct answer was "{options[correctAnswerIndex]}".</p>
      )}
      {isAnswered && selectedOption === correctAnswerIndex && (
        <p className="mt-4 text-sm text-green-400">That's correct!</p>
      )}
    </div>
  );
};

export default QuizBlock;