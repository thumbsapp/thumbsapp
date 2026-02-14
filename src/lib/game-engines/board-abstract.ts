import { Game } from '@/lib/types';

export const boardAbstractGames: Game[] = [
  { id: 'ba1', name: 'Open Chess Duel', description: 'Classic chess.', category: 'Board & Abstract Strategy', minStake: 1, maxStake: 100 },
  // ... up to 40
];

for (let i = 2; i <= 40; i++) {
  boardAbstractGames.push({ id: `ba${i}`, name: `Board Game ${i}`, description: 'Description', category: 'Board & Abstract Strategy', minStake: 1, maxStake: 100 });
}