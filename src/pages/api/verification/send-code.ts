import { Request, Response } from 'express';
import { TwilioService } from '../../../services/twilioService';
import { storeVerificationCode } from '../../../utils/verification';
import { validatePhoneNumber } from '../../../utils/validation';
import { logger } from '../../../utils/logger';
import { limiter } from '../../../middleware';

export default async function handler(
  req: Request,
  res: Response
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await limiter(req as any, res as any, async () => {
      const { phone } = req.body;

    if (!validatePhoneNumber(phone)) {
      throw new Error('Invalid phone number format');
    }

    const code = storeVerificationCode(phone);
    
    await TwilioService.sendSMS(
      phone,
      `Your verification code is: ${code}. Valid for 10 minutes.`
    );

    res.status(200).json({ success: true });
    });
  } catch (error) {
    logger.error('Error in send-code:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
}