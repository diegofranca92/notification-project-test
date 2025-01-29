import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Notification {
  id: number;
  channel: string;
  title: string;
  message: string;
  dateSent: string;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set) => ({
      notifications: [],
      addNotification: (notification) =>
        set((state) => ({
          notifications: [...state.notifications, notification],
        })),
    }),
    {
      name: "notification-storage",
    }
  )
);
