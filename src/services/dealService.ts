export class DealService {
    static async sendVerificationCode(phone: string) {
      const response = await fetch('/api/verification/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send verification code');
      }
      
      return response.json();
    }
  
    static async verifyCode(phone: string, code: string) {
      const response = await fetch('/api/verification/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code }),
      });
      
      if (!response.ok) {
        throw new Error('Invalid verification code');
      }
      
      return response.json();
    }
  
    static async sendDeal(phone: string, dealDetails: string, restaurantId: string) {
      const response = await fetch('/api/deals/send-deal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, dealDetails, restaurantId }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send deal');
      }
      
      return response.json();
    }
  }