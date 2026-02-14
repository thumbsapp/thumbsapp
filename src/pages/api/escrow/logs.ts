import type { NextApiRequest, NextApiResponse } from 'next';
import { auditLogger } from '@/lib/utils/auditLogger';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const logs = auditLogger.getLogs();
  res.status(200).json({ logs });
}