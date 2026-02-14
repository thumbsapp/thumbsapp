import { Game } from '@/lib/types';

export const triviaKnowledgeGames: Game[] = [
  { id: 'tk1', name: 'Geography Duel', description: 'Answer geography questions.', category: 'Trivia & Knowledge', minStake: 1, maxStake: 30 },
  // ... up to 30
];

for (let i = 2; i <= 30; i++) {
  triviaKnowledgeGames.push({ id: `tk${i}`, name: `Trivia Game ${i}`, description: 'Description', category: 'Trivia & Knowledge', minStake: 1, maxStake: 30 });
}