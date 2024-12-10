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



if (!process.env.REACT_APP_SENDGRID_API_KEY) {
  console.error('SendGrid API key is not configured');
}

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { email, dealDetails, restaurantName } = req.body;
  console.log('Received request:', { email, dealDetails, restaurantName });

  if (!process.env.REACT_APP_SENDGRID_API_KEY) {
    console.error('SendGrid API key is missing');
  {/*  return res.status(500).json({
      error: 'Configuration error',
      details: 'SendGrid API key is not configured'
    });
    */}
  }
    

  const msg = {
    to: email,
    from: process.env.REACT_APP_SENDGRID_VERIFIED_SENDER || 'hello@xeddy.app',
    subject: `Your Fuel Up ⚡ Deal from ${restaurantName}`,
    text: `Thank you for choosing a deal from ${restaurantName}! Here is your deal: ${dealDetails}. Be sure to show this email to the cashier when you get to the register at ${restaurantName}. Best of luck on Finals!`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Deal Confirmation</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f9f9f9;
              }
              .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #dddddd;
                  border-radius: 10px;
                  overflow: hidden;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background: #4CAF50;
                  color: #ffffff;
                  text-align: center;
                  padding: 15px 10px;
                  font-size: 20px;
                  font-weight: bold;
              }
              .content {
                  padding: 20px;
                  text-align: left;
                  color: #333333;
              }
              .content h2 {
                  color: #4CAF50;
                  font-size: 18px;
              }
              .deal-box {
                  background: #f0f4f7;
                  padding: 15px;
                  margin: 20px 0;
                  border-left: 4px solid #4CAF50;
                  border-radius: 5px;
                  font-size: 16px;
              }
              .footer {
                  text-align: center;
                  background: #f7f7f7;
                  padding: 15px 10px;
                  font-size: 14px;
                  color: #555555;
                  border-top: 1px solid #dddddd;
              }
              .footer a {
                  color: #4CAF50;
                  text-decoration: none;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <div class="header">
                  Thank You for Choosing a Deal!
              </div>
              <div class="content">
                  <p>Hi there,</p>
                  <p>Thank you for choosing a deal from <strong>${restaurantName}</strong>! 🎉</p>
                  <h2>Here is your deal:</h2>
                  <div class="deal-box">
                      ${dealDetails}
                  </div>
                  <p>Be sure to show this email to the cashier when you get to the register at <strong>${restaurantName}</strong>.</p>
                  <p>Best of luck on Finals! 🍀</p>
              </div>
              <div class="footer">
                  Powered by Xeddy | <a href="#">Unsubscribe</a>
              </div>
          </div>
      </body>
      </html>
    `,
    bcc: 'basil@xeddy.app, mussie@xeddy.app'
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