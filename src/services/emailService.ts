import axios from 'axios';

// Use environment variable for the backend URL, fallback to localhost for development
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

export const sendDealEmail = async (email: string, dealDetails: string) => {
  console.log('sendDealEmail called with:', { email, dealDetails });
  
  try {
    const response = await axios({
      method: 'post',
      url: `${BACKEND_URL}/api/send-email`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: { email, dealDetails }
    });
    console.log('Email sent successfully to:', email);
    return response;
  } catch (error) {
    console.error('Detailed error in sendDealEmail:', error);
    throw error;
  }
};
