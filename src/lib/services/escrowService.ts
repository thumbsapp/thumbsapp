import { api } from './api';

export const escrowService = {
  createEscrow: async (challengeId: string, playerA: string, playerB: string, amount: number, giftId?: string) => {
    return api.post('/api/escrow/create', { challengeId, playerA, playerB, amount, giftId });
  },
  resolveEscrow: async (escrowId: string, winnerId: string, outcome: any) => {
    return api.post('/api/escrow/resolve', { escrowId, winnerId, outcome });
  },
  getLogs: async () => {
    return api.get('/api/escrow/logs');
  },
};