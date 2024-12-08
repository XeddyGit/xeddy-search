import axios from 'axios';

// Use environment variable for the backend URL, fallback to localhost for development
const BACKEND_URL = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_BACKEND_PROD_URL 
  : process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

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
    if (axios.isAxiosError(error)) {
      console.error('Email sending failed:', {
        status: error.response?.status,
        message: error.response?.data || error.message,
        serverError: error.response?.data
      });
      throw new Error(`Failed to send email: ${error.response?.data?.message || error.message}`);
    }
    console.error('Unexpected error:', error);
    throw error;
  }
};
