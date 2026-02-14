import type { NextApiRequest, NextApiResponse } from 'next';
import { gameList } from '@/lib/game-engines';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ games: gameList });
}