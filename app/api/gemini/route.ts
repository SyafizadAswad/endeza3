import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { note } = await request.json();
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Generate content
    const result = await model.generateContent(`
      Based on the following notes, provide:
      1. A concise summary
      2. 3 quiz questions with 4 options each
      
      Notes: ${note}
    `);
    
    const response = await result.response;
    const text = response.text();
    
    // Parse the response to separate summary and quiz
    const [summary, ...quizParts] = text.split('\n\n');
    const quiz = quizParts
      .filter(part => part.includes('?'))
      .map(part => {
        const [question, ...options] = part.split('\n');
        return {
          question: question.replace(/^\d+\.\s*/, ''),
          options: options.map(opt => opt.replace(/^[a-d]\)\s*/, '')),
        };
      });

    return NextResponse.json({ summary, quiz });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
} 