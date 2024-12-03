import { useState } from 'react';
import { Modal } from './Modal';
import { UserInfoForm } from './UserInfoForm';
import { VerificationForm } from './VerificationForm';
import { SuccessMessage } from './SuccessMessage';
import { Deal } from '../RestaurantDirectory/types';

interface DealButtonProps {
  restaurantName: string;
  dealDetails: Deal;
}

export function DealButton({ restaurantName, dealDetails }: DealButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<'initial' | 'verification' | 'success'>('initial');
  const [userInfo, setUserInfo] = useState({ name: '', phone: '' });

  const handleSubmitInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Info:', userInfo);
    // Call API to send verification code
    // await sendVerificationCode(userInfo.phone);
    setStep('verification');
  };

  const handleVerifyCode = async (code: string) => {
    console.log('Verifying code:', code, 'for phone:', userInfo.phone);
    // Call API to verify code
    // if (await verifyCode(userInfo.phone, code)) {
    //   await sendDealToUser(userInfo.phone, dealDetails);
    setStep('success');
    // }
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-primary text-white px-6 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
      >
        Fuel Up for Finals Deal!
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-xl">
          {step === 'initial' && (
            <UserInfoForm 
            onSubmit={handleSubmitInfo}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}
        {step === 'verification' && (
          <VerificationForm 
            onVerify={handleVerifyCode}
            onResend={() => handleSubmitInfo}
            phone={userInfo.phone}
          />
        )}
        {step === 'success' && (
          <SuccessMessage onClose={() => {
            setIsModalOpen(false);
            setStep('initial');
          }} />
          )}
        </div>
      </Modal>
    </>
  );
}