import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null, // { username, email }
    loading: true, // Loading state for initial auth check
};

function authReducer(state, action) {
    switch (action.type) {
        case 'AUTH_READY':
            return { ...state, loading: false };
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                loading: false
            };
        case 'REGISTER':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load authentication state from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                dispatch({ type: 'LOGIN', payload: user });
            } catch (error) {
                console.error('Failed to parse stored user data:', error);
                localStorage.removeItem('user');
                dispatch({ type: 'AUTH_READY' });
            }
        } else {
            dispatch({ type: 'AUTH_READY' });
        }
    }, []);

    const login = (email, password) => {
        // In a real app, this would make an API call
        // For now, we'll check against registered users in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            const { password, ...userWithoutPassword } = user;
            localStorage.setItem('user', JSON.stringify(userWithoutPassword));
            dispatch({ type: 'LOGIN', payload: userWithoutPassword });
            return { success: true };
        } else {
            return { success: false, error: 'Invalid email or password' };
        }
    };

    const register = (username, email, password) => {
        // In a real app, this would make an API call
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if user already exists
        if (users.some(u => u.email === email)) {
            return { success: false, error: 'Email already registered' };
        }

        // Create new user
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto-login after registration
        const { password: _, ...userWithoutPassword } = newUser;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        dispatch({ type: 'REGISTER', payload: userWithoutPassword });
        return { success: true };
    };

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
