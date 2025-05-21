import NoteInput from '@/components/NoteInput'
import AudioPlayer from '@/components/AudioPlayer'
import QuizDisplay from '@/components/QuizDisplay'
import SummaryDisplay from '@/components/SummaryDisplay'

export default function Home() {
  const handleNoteSubmit = (note: string) => {
    // TODO: Handle the submitted note
    console.log('Note submitted:', note);
  };

  const sampleQuiz = [
    {
      question: "What is the main topic?",
      options: ["Option 1", "Option 2", "Option 3"]
    }
  ];

  const sampleSummary = "This is a sample summary of the notes.";

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Endeza - Your Learning Assistant</h1>
        <NoteInput onSubmit={handleNoteSubmit} />
        <AudioPlayer url="/sample-audio.mp3" />
        <QuizDisplay quiz={sampleQuiz} />
        <SummaryDisplay summary={sampleSummary} />
      </div>
    </main>
  )
} 