
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
      return 'border-border hover:border-primary hover:bg-primary/10 transform hover:scale-[1.02]';
    }

    let base = 'border-border opacity-60';
    let transform = '';

    if (index === correctAnswerIndex) {
      base = 'border-green-500 bg-green-500/10 text-green-800';
    } else if (index === selectedOption) {
      base = 'border-red-500 bg-red-500/10 text-red-800';
    }

    if (index === selectedOption) {
      transform = 'scale-105 shadow-lg';
    }
    
    if (index !== correctAnswerIndex && index !== selectedOption) {
        base += ' text-gray-500';
    }

    return `${base} ${transform}`;
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
            className={`w-full text-left p-4 border-2 rounded-md transition-all duration-300 ease-in-out ${getOptionClasses(index)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && selectedOption !== correctAnswerIndex && (
        <p className="mt-4 text-sm text-red-600">Not quite. The correct answer was "{options[correctAnswerIndex]}".</p>
      )}
      {isAnswered && selectedOption === correctAnswerIndex && (
        <p className="mt-4 text-sm text-green-600">That's correct!</p>
      )}
    </div>
  );
};

export default QuizBlock;
