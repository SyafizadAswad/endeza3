'use client';

import React from 'react';

type SummaryDisplayProps = {
  summary: string;
};

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary }) => (
  <div className="bg-gray-100 p-4 rounded shadow mt-4">
    <h2 className="font-bold mb-2">AI Summary</h2>
    <p>{summary}</p>
  </div>
);

export default SummaryDisplay; 