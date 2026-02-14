import { create } from 'zustand';
import { User } from '@/lib/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  initialize: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  initialize: () => {
    // Check localStorage for session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      set({ user: JSON.parse(savedUser), isAuthenticated: true, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
  login: async (email, password) => {
    // Mock login
    const mockUser: User = {
      id: '1',
      displayName: 'John Doe',
      handle: 'johndoe',
      avatar: null,
      verified: true,
      reputation: 1200,
      country: 'US',
      followers: 100,
      following: 50,
      bio: 'Gamer',
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
}));