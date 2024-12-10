import React, { useState } from 'react';
import { NewModal } from './NewModal';
import { Deal } from '../RestaurantDirectory/types';
import { sendDealEmail } from '../../services/emailService';
import ReactGA from 'react-ga4';

interface EDealButtonProps {
  restaurantName: string;
  dealDetails: Deal[];
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
      
      await sendDealEmail(email, selectedDeal, restaurantName);
      console.log('Email sent successfully');

      ReactGA.event({
        category: 'Deals',
        action: 'deal_email_sent',
        label: `${restaurantName} - ${selectedDeal}`,
        value: 1
      });

      alert('Deal sent successfully!');
      handleCloseModal();
    } catch (error) {
      ReactGA.event({
        category: 'Errors',
        action: 'deal_email_failed',
        label: `${restaurantName} - ${(error as Error).message}`,
        value: 0
      });

      setError('Error sending deal. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
        Fuel Up ⚡ for Finals Deal
      </button>
      <NewModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-6 max-w-md w-full">
          {/* Header Section */}
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl font-bold text-orange-600">Dec. 10th - Dec. 16th</h2>
            <h2 className="text-2xl font-bold text-gray-900">
              Select Your Fuel Up ⚡ Deal
              <span className="block text-primary mt-1">{restaurantName}</span>
            </h2>
          </div>

          {/* Deals Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Available Deals:</h3>
            <div className="space-y-3">
              {dealDetails.map((deal, index) => (
                <button 
                  key={index}
                  onClick={() => handleDealSelection(deal.dealDescription)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedDeal === deal.dealDescription
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      selectedDeal === deal.dealDescription
                        ? 'bg-primary/10'
                        : 'bg-gray-100'
                    }`}>
                      {deal.dealType === 'percentage' && '💰'}
                      {deal.dealType === 'bogo' && '🎓'}
                      {deal.dealType === 'discount' && '🏷️'}
                    </div>
                    <span className="font-medium text-gray-800">{deal.dealDescription}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Email Input Section */}
          {selectedDeal && (
            <div className="mt-8 space-y-4">
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-green-800 font-medium flex items-center gap-2">
                  <span>✓</span>
                  <span>Selected: {selectedDeal}</span>
                </p>
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your UMBC email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                {error && (
                  <p className="text-red-500 text-sm flex items-center gap-2">
                    <span>⚠️</span>
                    <span>{error}</span>
                  </p>
                )}
              </div>
              <button 
                onClick={handleSendDeal}
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Deal</span>
                <span>📧</span>
              </button>
            </div>
          )}
        </div>
      </NewModal>
    </div>
  );
}
