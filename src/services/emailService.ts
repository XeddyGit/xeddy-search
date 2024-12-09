import axios from 'axios';

// Use environment variable for the backend URL, fallback to localhost for development
console.log('Backend URL:', process.env.REACT_APP_BACKEND_PROD_URL);
console.log('Full Environment:', process.env);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('REACT_APP_BACKEND_PROD_URL:', process.env.REACT_APP_BACKEND_PROD_URL);
console.log('REACT_APP_BACKEND_URL:', process.env.REACT_APP_BACKEND_URL);

const BACKEND_URL = process.env.NODE_ENV === 'production' 

  ? process.env.REACT_APP_BACKEND_PROD_URL 
  : process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

export const sendDealEmail = async (email: string, dealDetails: string) => {
  const config = {
    method: 'post',
    url: `${BACKEND_URL}/api/send-email`,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000, // 10 second timeout
    data: { email, dealDetails }
  };

  try {
    console.log('Sending request with config:', config);
    const response = await axios(config);
    console.log('Full axios response:', response);
    return response;
  } catch (error: any) {
    console.error('Detailed Axios Error:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
      config: error.config
    });

    // More specific error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error(`Server responded with ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response received from server. Check network connectivity.');
    } else {
      // Something happened in setting up the request
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
};
