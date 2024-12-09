require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const corsOptions = {
    origin: [
      'https://ocd.joinxeddy.com',  // Production frontend URL
      'http://localhost:3000',      // Development URL
      // Add any other allowed origins
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

// Add more detailed logging for CORS and server startup
console.log('Current Environment:', process.env.NODE_ENV);
console.log('Allowed Origin:', corsOptions.origin);

// Add a catch-all error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    error: 'Unexpected server error',
    details: err.message
  });
});

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());

console.log('SendGrid API Key:', process.env.REACT_APP_SENDGRID_API_KEY ? 'Present' : 'Missing');

if (!process.env.REACT_APP_SENDGRID_API_KEY) {
  console.error('SendGrid API key is not configured');
}

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { email, dealDetails } = req.body;
  console.log('Received request:', { email, dealDetails });

  if (!process.env.REACT_APP_SENDGRID_API_KEY) {
    console.error('SendGrid API key is missing');
    return res.status(500).json({
      error: 'Configuration error',
      details: 'SendGrid API key is not configured'
    });
  }

  const msg = {
    to: email,
    from: process.env.REACT_APP_SENDGRID_VERIFIED_SENDER || 'hello@xeddy.app',
    subject: 'Your Deal from Our Restaurant',
    text: `Here is your deal: ${dealDetails}`,
    html: `<p>Here is your deal: ${dealDetails}</p>`,
  };

  try {
    console.log('Attempting to send email with:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject
    });
    
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid Error Details:', {
      message: error.message,
      code: error.code,
      response: error.response?.body
    });
    
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.response?.body || error.message
    });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Email Service API');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 