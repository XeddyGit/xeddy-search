import { NextApiRequest, NextApiResponse } from 'next';
import { verifyCode } from '../../../utils/verification';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phone, code } = req.body;

    const isValid = verifyCode(phone, code);
    
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid or expired code' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ error: 'Failed to verify code' });
  }
}