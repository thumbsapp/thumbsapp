import type { NextApiRequest, NextApiResponse } from 'next';
import { auditLogger } from '@/lib/utils/auditLogger';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { challengeId, playerA, playerB, amount, giftId } = req.body;

  // Mock escrow creation
  const escrowId = `escrow_${Date.now()}`;
  auditLogger.log('ESCROW_CREATED', { escrowId, playerA, playerB, amount, giftId });

  res.status(200).json({ escrowId, status: 'locked' });
}