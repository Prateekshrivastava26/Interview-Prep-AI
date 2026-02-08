import { useState, useEffect } from 'react';
import { useQuiz } from '../store/quiz-context.jsx';
import { generateQuestions, getAvailableCompanies } from '../services/ai.js';

function WelcomeScreen() {
    const { dispatch } = useQuiz();
    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState('Medium');
    const [company, setCompany] = useState('');
    const [availableCompanies, setAvailableCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setAvailableCompanies(getAvailableCompanies());
    }, []);

    const handleStart = async (e) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setIsLoading(true);
        dispatch({ type: 'START_LOADING', payload: { topic, difficulty, company } });

        try {
            console.log(`Starting quiz generation: Topic=${topic}, Difficulty=${difficulty}, Company=${company}`);
            // Always use embedded API key - explicitly request 10 questions
            const questions = await generateQuestions(topic, difficulty, company, '', 10);
            console.log(`Received ${questions.length} questions`);

            if (!questions || questions.length === 0) {
                throw new Error('No questions were generated');
            }

            dispatch({ type: 'QUESTIONS_LOADED', payload: questions });
            dispatch({ type: 'START_QUIZ' });
        } catch (error) {
            console.error('Quiz generation error:', error);
            dispatch({ type: 'SET_ERROR', payload: `Failed to generate questions: ${error.message}. Please try again.` });
            setIsLoading(false);
        }
    };

    return (
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready for your interview?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                Select a topic and we'll generate 10 unique interview questions!
            </p>

            <form onSubmit={handleStart} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    disabled={isLoading}
                    style={{
                        padding: '1rem',
                        fontSize: '1.1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--color-border)',
                        color: topic ? 'white' : 'var(--color-text-muted)',
                        width: '100%',
                        transition: 'var(--transition)',
                        cursor: 'pointer'
                    }}
                >
                    <option value="" style={{ color: 'gray' }}>Select a topic...</option>
                    <option value="react" style={{ color: 'black' }}>React</option>
                    <option value="javascript" style={{ color: 'black' }}>JavaScript</option>
                    <option value="java" style={{ color: 'black' }}>Java</option>
                    <option value="python" style={{ color: 'black' }}>Python</option>
                    <option value="cpp" style={{ color: 'black' }}>C++</option>
                    <option value="csharp" style={{ color: 'black' }}>C#</option>
                    <option value="system design" style={{ color: 'black' }}>System Design</option>
                    <option value="databases" style={{ color: 'black' }}>Databases</option>
                </select>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        disabled={isLoading}
                        style={{
                            padding: '1rem',
                            fontSize: '1.1rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--color-border)',
                            color: 'white',
                            flex: 1,
                            transition: 'var(--transition)',
                            cursor: 'pointer'
                        }}
                    >
                        <option value="Easy" style={{ color: 'black' }}>Easy</option>
                        <option value="Medium" style={{ color: 'black' }}>Medium</option>
                        <option value="Hard" style={{ color: 'black' }}>Hard</option>
                    </select>

                    <select
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        disabled={isLoading}
                        style={{
                            padding: '1rem',
                            fontSize: '1.1rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--color-border)',
                            color: company ? 'white' : 'var(--color-text-muted)',
                            flex: 1,
                            transition: 'var(--transition)',
                            cursor: 'pointer'
                        }}
                    >
                        <option value="" style={{ color: 'black' }}>Target Company (Optional)</option>
                        {availableCompanies.map(c => (
                            <option key={c} value={c} style={{ color: 'black' }}>{c}</option>
                        ))}
                    </select>
                </div>

                <div style={{
                    padding: '0.75rem',
                    background: 'rgba(0, 255, 0, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ color: '#00ff00', fontSize: '1.2rem' }}>✨</span>
                    <span style={{ color: '#00ff00', fontSize: '0.9rem', fontWeight: 'bold' }}>
                        AI-Powered: Fresh, unique questions every time!
                    </span>
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.7 : 1, position: 'relative' }}
                >
                    {isLoading ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <span className="spinner" style={{
                                width: '16px', height: '16px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'
                            }}></span>
                            Generating Questions...
                        </span>
                    ) : 'Start Interview'}
                </button>
            </form>
        </div>
    );
}

export default WelcomeScreen;
