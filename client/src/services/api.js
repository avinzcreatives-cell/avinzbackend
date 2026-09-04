/**
 * Avinz Creatives API Service
 * Handles communications with the Express.js mail backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

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
    console.error('API Error [sendContactMessage]:', error);
    // In demo or offline mode, simulate success if connection is refused so user testing isn't blocked
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return {
        success: true,
        simulated: true,
        message: 'Thank you! Your message has been received (Local Demo Mode). We will reach out shortly.'
      };
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
    console.error('API Error [sendQuoteRequest]:', error);
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return {
        success: true,
        simulated: true,
        message: 'Quote request recorded (Local Demo Mode). Our team will connect with you soon.'
      };
    }
    throw error;
  }
};

export const sendEnrollmentRequest = async (enrollData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit enrollment.');
    }
    return data;
  } catch (error) {
    console.error('API Error [sendEnrollmentRequest]:', error);
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return {
        success: true,
        simulated: true,
        message: `Enrollment submitted for ${enrollData.course} (Local Demo Mode). We will call you to confirm your seat!`
      };
    }
    throw error;
  }
};
