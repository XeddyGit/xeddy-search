import React, { useState } from 'react';
import { NewModal } from './NewModal';
import { Deal } from '../RestaurantDirectory/types';
import { sendDealEmail } from '../../services/emailService';

interface EDealButtonProps {
  restaurantName: string;
  dealDetails: Deal;
}

export function EDealButton({ restaurantName, dealDetails }: EDealButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail('');
    setSelectedDeal(null);
    setError('');
  };

  const handleDealSelection = (deal: string) => {
    setSelectedDeal(deal);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSendDeal = async () => {
    console.log('Attempting to send deal...');
    if (!email.includes('@umbc.edu')) {
      setError('Please enter a valid UMBC email address.');
      return;
    }
    if (!selectedDeal) {
      setError('Please select a deal before sending.');
      return;
    }

    try {
      console.log('Sending email with:', {
        email,
        dealDetails: selectedDeal
      });
      
      await sendDealEmail(email, selectedDeal);
      console.log('Email sent successfully');
      alert('Deal sent successfully!');
      handleCloseModal();
    } catch (error) {
      console.error('Detailed error sending deal:', error);
      setError('Error sending deal. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="bg-primary text-white px-4 py-2 rounded-lg">
        Get Your Deal
      </button>
      <NewModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold">Select Your Deal for {restaurantName}</h2>
        <div className="mt-4">
          <h3 className="text-lg">Available Deals:</h3>
          <ul>
            <li>
              <button onClick={() => handleDealSelection(dealDetails.dealDescription)} className="text-blue-500">
                {dealDetails.dealDescription}
              </button>
            </li>
          </ul>
        </div>
        {selectedDeal && (
          <div className="mt-4">
            <p className="text-green-600">You have selected: {selectedDeal}</p>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your UMBC email"
              className="mt-2 p-2 border rounded w-full"
            />
            <button onClick={handleSendDeal} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Send Deal
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}
      </NewModal>
    </div>
  );
}
