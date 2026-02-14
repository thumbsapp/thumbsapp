import { Game } from '@/lib/types';

export const memoryPatternGames: Game[] = [
  { id: 'mp1', name: 'Memory Flip Duel', description: 'Match pairs faster.', category: 'Memory & Pattern', minStake: 1, maxStake: 25 },
  // ... up to 30
];

for (let i = 2; i <= 30; i++) {
  memoryPatternGames.push({ id: `mp${i}`, name: `Memory Game ${i}`, description: 'Description', category: 'Memory & Pattern', minStake: 1, maxStake: 25 });
}