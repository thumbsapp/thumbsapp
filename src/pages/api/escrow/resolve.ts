import type { NextApiRequest, NextApiResponse } from 'next';
import { auditLogger } from '@/lib/utils/auditLogger';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { escrowId, winnerId, outcome } = req.body;
  auditLogger.log('ESCROW_RESOLVED', { escrowId, winnerId, outcome });

  res.status(200).json({ escrowId, status: 'resolved', winner: winnerId });
}