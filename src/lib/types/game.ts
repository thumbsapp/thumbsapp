export interface Game {
  id: string;
  name: string;
  description: string;
  category: string;
  minStake: number;
  maxStake: number;
}

export interface Match {
  id: string;
  title: string;
  playerA: string;
  playerB: string;
  score: string;
  spectators: number;
}