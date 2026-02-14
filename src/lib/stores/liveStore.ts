import { create } from 'zustand';
import { Match } from '@/lib/types';

interface LiveState {
  liveMatches: Match[];
  currentMatch: Match | null;
  fetchMatches: () => void;
  fetchMatch: (id: string) => void;
}

export const useLiveStore = create<LiveState>((set) => ({
  liveMatches: [
    { id: '1', title: 'Speed Chess', playerA: 'alice', playerB: 'bob', score: '2-1', spectators: 123 },
    { id: '2', title: 'Trivia Duel', playerA: 'charlie', playerB: 'dave', score: '5-4', spectators: 45 },
  ],
  currentMatch: null,
  fetchMatches: () => {
    // Mock
  },
  fetchMatch: (id) => {
    const match = { id, title: 'Match', playerA: 'alice', playerB: 'bob', score: '0-0', spectators: 0 };
    set({ currentMatch: match });
  },
}));