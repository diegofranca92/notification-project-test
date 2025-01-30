import { create } from 'zustand';

interface SessionState {
  currentSession: any;
  setSession: (session: any) => void;
}

const useSessionStore = create<SessionState>((set) => ({
  currentSession: null,
  setSession: (currentSession) => set({ currentSession }),
}));

export default useSessionStore;
