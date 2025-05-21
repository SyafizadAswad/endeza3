import React, { useState } from 'react';

type NoteInputProps = {
  onSubmit: (note: string) => void;
};

const NoteInput: React.FC<NoteInputProps> = ({ onSubmit }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      onSubmit(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <textarea
        className="border rounded p-2 min-h-[100px]"
        placeholder="Paste or type your notes here..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Submit Note</button>
    </form>
  );
};

export default NoteInput; 