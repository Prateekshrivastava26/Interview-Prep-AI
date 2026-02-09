
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendScoreEmail = async (userEmail, scoreData) => {
    // Check if keys are actually configured (not placeholders and not empty)
    const isConfigured =
        SERVICE_ID && SERVICE_ID !== 'YOUR_SERVICE_ID' &&
        TEMPLATE_ID && TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
        PUBLIC_KEY && PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (!isConfigured) {
        console.warn('⚠️ EmailJS keys are missing or invalid. switching to MOCK MODE.');
        console.log('--- [MOCK EMAIL SEND] ---');
        console.log('To:', userEmail);
        console.log('Subject: Interview Result for', scoreData.topic);
        console.log('Body Data:', scoreData);
        console.log('-------------------------');

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        return { success: true, mock: true };
    }

    const templateParams = {
        to_email: userEmail,
        email: userEmail, // Fallback common variable
        recipient: userEmail, // Fallback common variable
        to_name: scoreData.username || 'User',
        from_name: 'AI Interview Prep',
        logo_url: window.location.origin + '/logo.jpg', // URL to the logo (needs to be public for emails)
        score: scoreData.score,
        total: scoreData.total,
        percentage: scoreData.percentage.toFixed(1),
        summary: scoreData.summary,
        feedback_details: scoreData.feedback_details || 'No detailed feedback available.',
        topic: scoreData.topic,
        difficulty: scoreData.difficulty,
        date: new Date().toLocaleDateString()
    };

    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('Email sent successfully:', response);
        return { success: true, response };
    } catch (error) {
        console.error('Failed to send email:', error);
        return { success: false, error };
    }
};
