import { create } from 'zustand';
import { Game } from '@/lib/types';
import { gameList } from '@/lib/game-engines';

interface GameState {
  games: Game[];
  currentGame: Game | null;
  loadGames: () => void;
  loadGame: (id: string) => void;
  createChallenge: (gameId: string, stake: number, giftId?: string | null) => Promise<void>;
}

export const useGameStore = create<GameState>((set) => ({
  games: gameList,
  currentGame: null,
  loadGames: () => set({ games: gameList }),
  loadGame: (id) => {
    const game = gameList.find(g => g.id === id);
    set({ currentGame: game });
  },
  createChallenge: async (gameId, stake, giftId) => {
    // Mock create challenge
    console.log('Challenge created', { gameId, stake, giftId });
  },
}));