import { create } from 'zustand'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SessionState {
  currentSession: any
  setSession: (session: any) => void
}

const useSessionStore = create<SessionState>(set => ({
  currentSession: null,
  setSession: currentSession => set({ currentSession })
}))

export default useSessionStore
