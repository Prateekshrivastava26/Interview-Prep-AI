import { useQuiz } from './store/quiz-context.jsx'
import { useAuth } from './store/auth-context.jsx'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import QuestionScreen from './components/QuestionScreen.jsx'
import ResultsScreen from './components/ResultsScreen.jsx'

function App() {
  const { state } = useQuiz();
  const { state: authState, logout } = useAuth();

  return (
    <div className="container">
      <header style={{ padding: '2rem 0', textAlign: 'center', position: 'relative' }}>
        <img src="/Interview-Prep-AI/logo.jpg" alt="Logo" style={{ width: '64px', height: '64px', marginBottom: '1rem' }} />
        {authState.isAuthenticated && (
          <div style={{
            position: 'absolute',
            top: '2rem',
            right: '0',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Welcome, <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{authState.user?.username}</span>
            </span>
            <button
              onClick={logout}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'var(--color-border-strong)';
                e.target.style.color = 'var(--color-text)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'var(--color-border)';
                e.target.style.color = 'var(--color-text-muted)';
              }}
            >
              Logout
            </button>
          </div>
        )}
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Interview Prep AI</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
          {state.status === 'idle' ? 'Master your interview skills with AI' :
            state.status === 'finished' ? 'Results' :
              `Topic: ${state.topic}`}
        </p>
      </header>

      <main style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        {state.status === 'idle' && <WelcomeScreen />}

        {state.status === 'loading' && (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', width: '100%', maxWidth: '600px' }}>
            <div className="spinner" style={{
              width: '40px', height: '40px', border: '4px solid var(--color-primary)',
              borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem auto'
            }}></div>
            <p style={{ fontSize: '1.2rem' }}>Generating interview questions for <strong>{state.topic}</strong>...</p>
          </div>
        )}

        {(state.status === 'ready' || state.status === 'active') && <QuestionScreen />}

        {(state.status === 'finished') && <ResultsScreen />}
      </main>


    </div>
  )
}

export default App

