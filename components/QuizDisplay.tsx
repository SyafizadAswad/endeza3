'use client';

import React from 'react';

type QuizQuestion = {
  question: string;
  options: string[];
  answer?: string;
};

type QuizDisplayProps = {
  quiz: QuizQuestion[];
};

const QuizDisplay: React.FC<QuizDisplayProps> = ({ quiz }) => (
  <div className="bg-yellow-50 p-4 rounded shadow mt-4">
    <h2 className="font-bold mb-2">Quiz</h2>
    <ol className="list-decimal ml-6">
      {quiz.map((q, idx) => (
        <li key={idx} className="mb-2">
          <div className="font-semibold">{q.question}</div>
          <ul className="list-disc ml-6">
            {q.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
);

export default QuizDisplay; 