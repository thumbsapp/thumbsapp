import { create } from 'zustand';

interface WalletState {
  balance: number;
  thumbsCoins: number;
  transactions: any[];
  loadWallet: () => void;
  addFunds: (amount: number) => void;
  withdraw: (amount: number) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  balance: 100.0,
  thumbsCoins: 500,
  transactions: [],
  loadWallet: () => {
    // Mock
  },
  addFunds: (amount) => set(state => ({ balance: state.balance + amount })),
  withdraw: (amount) => set(state => ({ balance: state.balance - amount })),
}));