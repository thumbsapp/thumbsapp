import type { NextApiRequest, NextApiResponse } from 'next';
import { getGameById } from '@/lib/game-engines';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const game = getGameById(id as string);
  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }
  res.status(200).json({ game });
}