/**
 * Avinz Creatives API Service
 * Handles communications with serverless functions and Express mail backend
 */

const API_BASE_URL = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
const FALLBACK_API_URL = 'https://avinzbackend-5.onrender.com/api';

export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send contact message.');
    }
    return data;
  } catch (error) {
    console.warn('[sendContactMessage] Primary endpoint failed, attempting fallback...', error);
    
    // Fallback to secondary endpoint if primary fails
    try {
      if (API_BASE_URL !== FALLBACK_API_URL) {
        const fbRes = await fetch(`${FALLBACK_API_URL}/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const fbData = await fbRes.json();
        if (fbRes.ok && fbData.success) {
          return fbData;
        }
      }
    } catch (fallbackError) {
      console.error('[sendContactMessage Fallback Error]:', fallbackError);
    }

    throw error;
  }
};

export const sendQuoteRequest = async (quoteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit quote request.');
    }
    return data;
  } catch (error) {
    console.warn('[sendQuoteRequest] Primary endpoint failed, attempting fallback...', error);
    
    try {
      if (API_BASE_URL !== FALLBACK_API_URL) {
        const fbRes = await fetch(`${FALLBACK_API_URL}/quote`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(quoteData),
        });
        const fbData = await fbRes.json();
        if (fbRes.ok && fbData.success) {
          return fbData;
        }
      }
    } catch (fallbackError) {
      console.error('[sendQuoteRequest Fallback Error]:', fallbackError);
    }

    throw error;
  }
};

export const sendAIChatMessage = async (messages) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send AI message.');
    }
    return data;
  } catch (error) {
    console.error('API Error [sendAIChatMessage]:', error);
    return {
      success: true,
      reply: 'Hello! You can also reach our team directly at +91 7806888047 or avinzcreatives@gmail.com for instant answers!'
    };
  }
};
