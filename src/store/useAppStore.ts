import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  apps: {
    id: number;
    name: string;
    token: string;
    activeChannels: {
      webpush: boolean;
      email: boolean;
      sms: boolean;
    };
  }[];
  addApp: (app: AppState["apps"][0]) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      apps: [],
      addApp: (app) =>
        set((state) => ({
          apps: [...state.apps, app],
        })),
    }),
    {
      name: "app-storage",
    }
  )
);
