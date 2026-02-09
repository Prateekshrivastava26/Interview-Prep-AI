
import { GoogleGenerativeAI } from "@google/generative-ai";

<<<<<<< HEAD
// Embedded API Key for automatic question generation
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
=======
>>>>>>> a8a13c6b1f05bae95dc27f2e7557f2d3d382d29e

export const generateQuizContent = async (apiKey, topic, difficulty, company, count = 10) => {
  // Use embedded key if no key provided
  const activeKey = apiKey || GEMINI_API_KEY;
  try {
    const genAI = new GoogleGenerativeAI(activeKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const companyContext = company ? ` asked in ${company} interviews` : "";

    const prompt = `
      Generate EXACTLY ${count} multiple-choice interview questions about "${topic}" (Difficulty: ${difficulty})${companyContext}.
      
      IMPORTANT: You must return EXACTLY ${count} questions, no more, no less.
      
      Return the response STRICTLY as a JSON array of objects. Do not include markdown formatting, code blocks, or any other text.
      
      Each object must follow this structure:
      {
        "question": "Question text here",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": 0, (Index of the correct option: 0, 1, 2, or 3)
        "explanation": "Brief explanation of why the answer is correct.",
        "askedIn": ["${company || "General"}"] (Array of strings, keep it real if possible or use generic tags)
      }

      Ensure the questions are high-quality, relevant to the difficulty level, and diverse.
      Return ONLY the JSON array, nothing else.
    `;

    console.log(`Requesting ${count} questions for topic: ${topic}, difficulty: ${difficulty}`);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log('Raw Gemini response length:', text.length);
    console.log('Raw Gemini response preview:', text.substring(0, 500));

    // Clean up potential markdown code blocks if the model adds them despite instructions
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    const parsedQuestions = JSON.parse(cleanText);
    console.log(`Successfully parsed ${parsedQuestions.length} questions from Gemini API`);

    if (!Array.isArray(parsedQuestions)) {
      throw new Error('Gemini response is not an array');
    }

    if (parsedQuestions.length === 0) {
      throw new Error('Gemini returned empty array');
    }

    return parsedQuestions;
  } catch (error) {
    console.error("Gemini API Error Details:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    throw new Error(`Failed to generate questions using Gemini AI: ${error.message}`);
  }
};
