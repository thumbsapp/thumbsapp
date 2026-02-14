import { Game } from '@/lib/types';

export const mathStrategyGames: Game[] = [
  { id: 'ms1', name: 'Arithmetic Duel', description: 'Solve math problems.', category: 'Math & Strategy', minStake: 1, maxStake: 40 },
  // ... up to 30
];

for (let i = 2; i <= 30; i++) {
  mathStrategyGames.push({ id: `ms${i}`, name: `Math Game ${i}`, description: 'Description', category: 'Math & Strategy', minStake: 1, maxStake: 40 });
}