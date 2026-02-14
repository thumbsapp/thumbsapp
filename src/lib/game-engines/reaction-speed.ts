import { Game } from '@/lib/types';

export const reactionSpeedGames: Game[] = [
  { id: 'rs1', name: 'Reaction Timer Duel', description: 'Click as fast as you can.', category: 'Reaction & Speed', minStake: 1, maxStake: 20 },
  // ... up to 30
];

for (let i = 2; i <= 30; i++) {
  reactionSpeedGames.push({ id: `rs${i}`, name: `Reaction Game ${i}`, description: 'Description', category: 'Reaction & Speed', minStake: 1, maxStake: 20 });
}