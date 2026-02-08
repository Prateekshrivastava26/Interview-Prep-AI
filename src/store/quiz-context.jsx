import { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
    status: 'idle', // idle, loading, ready, active, specific_question, finished
    topic: '',
    difficulty: 'Medium',
    questions: [],
    currentQuestionIndex: 0,
    answers: {}, // { questionIndex: selectedOptionIndex }
    result: null,
    error: null,
};

function quizReducer(state, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {
                ...state,
                status: 'loading',
                topic: action.payload.topic,
                difficulty: action.payload.difficulty,
                error: null
            };
        case 'QUESTIONS_LOADED':
            return {
                ...state,
                status: 'ready',
                questions: action.payload,
                currentQuestionIndex: 0,
                answers: {}
            };
        case 'SET_ERROR':
            return { ...state, status: 'idle', error: action.payload };
        case 'START_QUIZ':
            return { ...state, status: 'active' };
        case 'ANSWER_QUESTION':
            return {
                ...state,
                answers: { ...state.answers, [state.currentQuestionIndex]: action.payload }
            };
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1
            };
        case 'PREV_QUESTION':
            return {
                ...state,
                currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1)
            };
        case 'FINISH_QUIZ':
            return { ...state, status: 'calculating' }; // Intermediate state if needed
        case 'SET_RESULT':
            return { ...state, status: 'finished', result: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
}
