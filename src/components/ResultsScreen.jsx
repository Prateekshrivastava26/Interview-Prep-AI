import { useEffect, useState, useRef } from 'react';
import { useQuiz } from '../store/quiz-context.jsx';

function ResultsScreen() {
    const { state, dispatch } = useQuiz();
    const { result } = state;
    // State for leaderboard
    const [leaderboard, setLeaderboard] = useState([]);
    const scoreSavedRef = useRef(false);

    useEffect(() => {
        if (result && !scoreSavedRef.current) {
            const saveAndFetch = async () => {
                try {
                    const userStr = localStorage.getItem('user');
                    const user = userStr ? JSON.parse(userStr) : { username: 'Guest' };

                    const { saveScore, getLeaderboard } = await import('../services/leaderboard.js');

                    // Save current score
                    saveScore({
                        username: user.username,
                        topic: state.topic,
                        score: result.score,
                        total: result.total,
                        percentage: result.percentage
                    });

                    scoreSavedRef.current = true;

                    // Fetch updated leaderboard
                    setLeaderboard(getLeaderboard(10));
                } catch (error) {
                    console.error('Error managing leaderboard:', error);
                }
            };
            saveAndFetch();
        } else if (result) {
            // If already saved, just fetch
            import('../services/leaderboard.js').then(module => {
                setLeaderboard(module.getLeaderboard(10));
            });
        }
    }, [result, state.topic]);

    if (!result) return <div>Calculating results...</div>;

    const getScoreColor = () => {
        if (result.percentage >= 80) return 'var(--color-success)';
        if (result.percentage >= 50) return 'var(--color-primary)';
        return 'var(--color-error)';
    };

    return (
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Interview Complete!</h2>

            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Here is your performance summary for <strong>{state.topic}</strong></p>

            {/* Score Circle */}
            <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 3rem auto' }}>
                <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                    />
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={getScoreColor()}
                        strokeWidth="3"
                        strokeDasharray={`${result.percentage}, 100`}
                        style={{ transition: 'stroke-dasharray 1s ease' }}
                    />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{result.score}/{result.total}</span>
                    <span style={{ color: getScoreColor(), fontWeight: 'bold' }}>{result.percentage}%</span>
                </div>
            </div>

            <div style={{ marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
                {result.summary}
            </div>

            {/* Leaderboard Section */}
            {leaderboard.length > 0 && (
                <div style={{ marginBottom: '3rem', textAlign: 'left', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>🏆 Top 10 Leaderboard</h3>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                                    <th style={{ padding: '0.75rem', textAlign: 'center', width: '50px' }}>Rank</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>User</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Topic</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboard.map((entry, index) => (
                                    <tr key={index} style={{
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                        background: index === 0 ? 'rgba(255, 215, 0, 0.1)' :
                                            index === 1 ? 'rgba(192, 192, 192, 0.1)' :
                                                index === 2 ? 'rgba(205, 127, 50, 0.1)' : 'transparent'
                                    }}>
                                        <td style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 'bold', color: index < 3 ? 'var(--color-primary)' : 'inherit' }}>
                                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                                        </td>
                                        <td style={{ padding: '0.75rem' }}>{entry.username}</td>
                                        <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{entry.topic}</td>
                                        <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: 'bold' }}>{entry.score}/{entry.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <button
                className="btn-primary"
                onClick={() => dispatch({ type: 'RESET' })}
                style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginBottom: '4rem' }}
            >
                Start New Interview
            </button>

            {/* Detailed Review */}
            <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Detailed Review</h3>

                {state.questions.map((q, index) => {
                    const userAnswerIndex = state.answers[index];
                    const isCorrect = userAnswerIndex === q.correctAnswer;
                    const userOptionText = q.options[userAnswerIndex];
                    const correctOptionText = q.options[q.correctAnswer];

                    return (
                        <div key={q.id} style={{
                            marginBottom: '2rem',
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: `4px solid ${isCorrect ? 'var(--color-success)' : 'var(--color-error)'}`
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1.2rem', margin: 0, flex: 1 }}>{index + 1}. {q.question}</h4>
                                {q.askedIn && (
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginLeft: '1rem' }}>
                                        {q.askedIn.map(c => (
                                            <span key={c} style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', color: 'var(--color-text-muted)' }}>
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    borderRadius: 'var(--radius-sm)',
                                    background: isCorrect ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                                    color: isCorrect ? 'var(--color-success)' : 'var(--color-error)',
                                    border: '1px solid currentColor'
                                }}>
                                    <strong>Your Answer:</strong> {userOptionText || "Skipped"}
                                </div>

                                {!isCorrect && (
                                    <div style={{
                                        padding: '0.75rem',
                                        borderRadius: 'var(--radius-sm)',
                                        background: 'rgba(74, 222, 128, 0.1)',
                                        color: 'var(--color-success)',
                                        border: '1px solid currentColor'
                                    }}>
                                        <strong>Correct Answer:</strong> {correctOptionText}
                                    </div>
                                )}
                            </div>

                            <div style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontStyle: 'italic', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <strong>Explanation:</strong> {q.explanation}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ResultsScreen;
