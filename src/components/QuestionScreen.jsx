import { useQuiz } from '../store/quiz-context.jsx';
import { evaluatePerformance } from '../services/ai.js';

function QuestionScreen() {
    const { state, dispatch } = useQuiz();
    const { questions, currentQuestionIndex, answers } = state;
    const currentQuestion = questions[currentQuestionIndex];
    // Check if we have an answer for the current question
    const selectedOption = answers[currentQuestionIndex];

    const handleOptionSelect = (index) => {
        dispatch({ type: 'ANSWER_QUESTION', payload: index });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            dispatch({ type: 'NEXT_QUESTION' });
        } else {
            handleFinish();
        }
    };

    const handleFinish = async () => {
        dispatch({ type: 'FINISH_QUIZ' });
        // Calculate results
        const results = await evaluatePerformance(questions, answers);
        dispatch({ type: 'SET_RESULT', payload: results });
    };

    if (!currentQuestion) return <div>Loading...</div>;

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '500px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{state.topic}</span>
            </div>

            {/* Progress Bar */}
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: 'var(--color-primary)', transition: 'width 0.3s ease' }}></div>
            </div>

            {/* Company Badges */}
            {currentQuestion.askedIn && currentQuestion.askedIn.length > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {currentQuestion.askedIn.map((company, idx) => (
                        <span key={idx} style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '999px',
                            fontSize: '0.8rem',
                            color: 'var(--color-secondary)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontWeight: '600'
                        }}>
                            Asked in {company}
                        </span>
                    ))}
                </div>
            )}

            {/* Question */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>{currentQuestion.question}</h2>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            style={{
                                padding: '1.25rem',
                                textAlign: 'left',
                                borderRadius: 'var(--radius-md)',
                                background: isSelected ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                border: `1px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                color: isSelected ? 'white' : 'var(--color-text)',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                fontSize: '1rem'
                            }}
                        >
                            <div style={{
                                width: '24px', height: '24px', borderRadius: '50%',
                                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)'}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {isSelected && <div style={{ width: '12px', height: '12px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>}
                            </div>
                            {option}
                        </button>
                    );
                })}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', gap: '1rem' }}>
                {currentQuestionIndex > 0 && (
                    <button
                        onClick={() => dispatch({ type: 'PREV_QUESTION' })}
                        style={{ padding: '0.75rem 1.5rem', color: 'var(--color-text-muted)' }}
                    >
                        Previous
                    </button>
                )}
                <button
                    className="btn-primary"
                    onClick={handleNext}
                    disabled={selectedOption === undefined}
                    style={{ opacity: selectedOption === undefined ? 0.5 : 1 }}
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish Interview' : 'Next Question'}
                </button>
            </div>
        </div>
    );
}

export default QuestionScreen;
