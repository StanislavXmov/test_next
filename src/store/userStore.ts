import { create } from 'zustand';

interface UserStore {
  user: string;
  setUser: (user: string) => void;
}

export const useUser = create<UserStore>((set) => ({
  user: '',
  setUser: user => set({ user }),
}));