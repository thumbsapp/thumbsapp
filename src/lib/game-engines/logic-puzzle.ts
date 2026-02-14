import { Game } from '@/lib/types';

export const logicPuzzleGames: Game[] = [
  { id: 'lp1', name: 'Sudoku Speed Challenge', description: 'Solve Sudoku faster than opponent.', category: 'Logic & Puzzle', minStake: 1, maxStake: 50 },
  { id: 'lp2', name: 'Nonogram Classic', description: 'Reveal the picture by solving the grid.', category: 'Logic & Puzzle', minStake: 1, maxStake: 50 },
  // ... up to 40
];

for (let i = 3; i <= 40; i++) {
  logicPuzzleGames.push({ id: `lp${i}`, name: `Logic Game ${i}`, description: 'Description', category: 'Logic & Puzzle', minStake: 1, maxStake: 50 });
}