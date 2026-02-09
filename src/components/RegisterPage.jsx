import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth-context';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const getPasswordStrength = (pwd) => {
        if (!pwd) return { strength: 0, label: '', color: '' };

        let strength = 0;
        if (pwd.length >= 8) strength++;
        if (pwd.length >= 12) strength++;
        if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
        if (/\d/.test(pwd)) strength++;
        if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

        if (strength <= 2) return { strength: 1, label: 'Weak', color: 'var(--color-error)' };
        if (strength <= 3) return { strength: 2, label: 'Fair', color: 'var(--color-warning)' };
        if (strength <= 4) return { strength: 3, label: 'Good', color: 'var(--color-accent)' };
        return { strength: 4, label: 'Strong', color: 'var(--color-success)' };
    };

    const passwordStrength = getPasswordStrength(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (username.length < 3) {
            setError('Username must be at least 3 characters');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        // Simulate API delay
        setTimeout(() => {
            const result = register(username, email, password);
            setIsLoading(false);

            if (result.success) {
                navigate('/');
            } else {
                setError(result.error);
            }
        }, 500);
    };

    return (
        <div className="auth-container">
            <div className="auth-background-glow"></div>

            <div className="auth-card glass-panel">
                <div className="auth-header">
                    <img src="/Interview-Prep-AI/logo.jpg" alt="App Logo" style={{ width: '48px', height: '48px', marginBottom: '1rem' }} />
                    <h1 className="text-gradient">Create Account</h1>
                    <p className="auth-subtitle">Start your interview preparation journey today</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && (
                        <div className="auth-error">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" />
                                <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10ZM10 10C6.13401 10 3 13.134 3 17M10 10C13.866 10 17 13.134 17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                id="username"
                                type="text"
                                className="form-input"
                                placeholder="John Doe"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={isLoading}
                                name="fullname"
                                autoComplete="name"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5L10 11L17 5M3 5V15C3 15.5523 3.44772 16 4 16H16C16.5523 16 17 15.5523 17 15V5M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10V7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7V10M3 10H17C17.5523 10 18 10.4477 18 11V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V11C2 10.4477 2.44772 10 3 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                id="password"
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                        {password && (
                            <div className="password-strength">
                                <div className="password-strength-bars">
                                    {[1, 2, 3, 4].map(level => (
                                        <div
                                            key={level}
                                            className="password-strength-bar"
                                            style={{
                                                backgroundColor: level <= passwordStrength.strength
                                                    ? passwordStrength.color
                                                    : 'rgba(255, 255, 255, 0.1)'
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <span className="password-strength-label" style={{ color: passwordStrength.color }}>
                                    {passwordStrength.label}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M5 10V7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7V10M3 10H17C17.5523 10 18 10.4477 18 11V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V11C2 10.4477 2.44772 10 3 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                id="confirmPassword"
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary auth-submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></div>
                                <span>Creating account...</span>
                            </>
                        ) : (
                            'Create Account'
                        )}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login" className="auth-link">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
