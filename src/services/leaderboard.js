
const LEADERBOARD_KEY = 'interview_leaderboard';
const MAX_SCORES = 50; // Keep top 50 in storage

export const saveScore = (scoreData) => {
    try {
        const existingData = localStorage.getItem(LEADERBOARD_KEY);
        let leaderboard = existingData ? JSON.parse(existingData) : [];

        // Add new score
        const newEntry = {
            ...scoreData,
            date: new Date().toISOString()
        };
        leaderboard.push(newEntry);

        // Sort by percentage (desc) then score (desc) then date (desc)
        leaderboard.sort((a, b) => {
            if (b.percentage !== a.percentage) return b.percentage - a.percentage;
            if (b.score !== a.score) return b.score - a.score;
            return new Date(b.date) - new Date(a.date);
        });

        // Keep only top N
        if (leaderboard.length > MAX_SCORES) {
            leaderboard = leaderboard.slice(0, MAX_SCORES);
        }

        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
        return leaderboard;
    } catch (error) {
        console.error('Failed to save score:', error);
        return [];
    }
};

export const getLeaderboard = (limit = 10) => {
    try {
        const existingData = localStorage.getItem(LEADERBOARD_KEY);
        if (!existingData) return [];

        const leaderboard = JSON.parse(existingData);
        return leaderboard.slice(0, limit);
    } catch (error) {
        console.error('Failed to get leaderboard:', error);
        return [];
    }
};
