'use client';

import React from 'react';

type AudioPlayerProps = {
  url: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => (
  <div className="bg-green-50 p-4 rounded shadow mt-4">
    <h2 className="font-bold mb-2">Listen to Your Notes</h2>
    <audio controls src={url} className="w-full" />
  </div>
);

export default AudioPlayer; 