import { Game } from '@/lib/types';
import { logicPuzzleGames } from './logic-puzzle';
import { reactionSpeedGames } from './reaction-speed';
import { triviaKnowledgeGames } from './trivia-knowledge';
import { mathStrategyGames } from './math-strategy';
import { memoryPatternGames } from './memory-pattern';
import { boardAbstractGames } from './board-abstract';

// Combine all 200 games
export const gameList: Game[] = [
  ...logicPuzzleGames,
  ...reactionSpeedGames,
  ...triviaKnowledgeGames,
  ...mathStrategyGames,
  ...memoryPatternGames,
  ...boardAbstractGames,
];

export const getGameById = (id: string): Game | undefined => {
  return gameList.find(g => g.id === id);
};

// Deterministic engine placeholder
export const deterministicEngine = {
  initialize: (game: Game, canvas: HTMLCanvasElement) => {
    console.log(`Initializing deterministic game: ${game.name}`);
    // In real implementation, load game logic and render
  },
};