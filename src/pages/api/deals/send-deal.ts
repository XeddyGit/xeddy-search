import { NextApiRequest, NextApiResponse } from 'next';
import { TwilioService } from '../../../services/twilioService';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phone, dealDetails, restaurantId } = req.body;

    // Optional: Store deal redemption in database
    await prisma.dealRedemption.create({
      data: {
        phone,
        restaurantId,
        redeemedAt: new Date(),
      },
    });

    // Send deal via SMS
    await TwilioService.sendSMS(
      phone,
      `Here's your deal: ${dealDetails}`
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending deal:', error);
    res.status(500).json({ error: 'Failed to send deal' });
  }
}