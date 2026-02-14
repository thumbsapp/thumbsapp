import { api } from './api';

export const gameService = {
  getGames: async () => {
    return api.get('/api/games/list');
  },
  getGame: async (id: string) => {
    return api.get(`/api/games/${id}`);
  },
};