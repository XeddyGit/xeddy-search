import React, { useState } from 'react';

export function Modal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [dealCount, setDealCount] = useState(0);
  const [error, setError] = useState('');

  console.log('Email Deal Modal opened');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSendDeal = async () => {
    if (!email.includes('@umbc.edu')) {
      setError('Please enter a valid UMBC email address.');
      return;
    }
    if (dealCount >= 3) {
      setError('You can only send up to 3 deals.');
      return;
    }

    try {
      const dealDetails = "Your deal details here"; // Replace with actual deal details
      const response = await fetch('/api/deals/send-deal-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, dealDetails }),
      });

      if (!response.ok) {
        throw new Error('Failed to send deal');
      }

      setDealCount(dealCount + 1);
      alert('Deal sent successfully!');
      console.log('Deal sent to:', email);
    } catch (error) {
      setError('Error sending deal. Please try again.');
      console.error('Error sending deal:', error);
    }
  };

  const handleClose = () => {
    console.log('Email Deal Modal closed');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg relative">
        <button onClick={handleClose} className="absolute top-2 right-2">×</button>
        <input 
          type="email" 
          value={email} 
          onChange={handleEmailChange} 
          placeholder="Enter your UMBC email" 
          className="mt-4 p-2 border rounded"
        />
        <button onClick={handleSendDeal} className="mt-2 p-2 bg-blue-500 text-white rounded">Send Deal</button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}