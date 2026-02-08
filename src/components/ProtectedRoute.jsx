import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth-context';

function ProtectedRoute({ children }) {
    const { state } = useAuth();

    // Show loading state while checking authentication
    if (state.loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                    <div className="spinner" style={{
                        width: '40px',
                        height: '40px',
                        border: '4px solid var(--color-primary)',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        margin: '0 auto'
                    }}></div>
                    <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Loading...</p>
                </div>
            </div>
        );
    }

    // Redirect to login if not authenticated
    if (!state.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Render children if authenticated
    return children;
}

export default ProtectedRoute;
