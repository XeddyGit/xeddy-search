require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(cors());
app.use(express.json());

console.log('SendGrid API Key:', process.env.REACT_APP_SENDGRID_API_KEY ? 'Present' : 'Missing');
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { email, dealDetails } = req.body;
  console.log('Received request:', { email, dealDetails });

  const msg = {
    to: email,
    from: 'hello@xeddy.app',
    subject: 'Your Deal from Our Restaurant',
    text: `Here is your deal: ${dealDetails}`,
    html: `<p>Here is your deal: ${dealDetails}</p>`,
  };

  try {
    console.log('Attempting to send email with:', msg);
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed SendGrid error:', {
      message: error.message,
      response: error.response ? error.response.body : null,
      stack: error.stack,
      errors: error.response?.body?.errors
    });
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.response?.body || error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 