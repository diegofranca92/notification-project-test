// Hook para gerenciar autenticação
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(status === "loading");

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  const logout = async () => {
    await signOut();
  };

  return {
    user: session?.user,
    loading,
    isAuthenticated: !!session,
    logout,
  };
}

// Hook para gerenciar notificações simuladas
export function useNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, channel: "Email", title: "Promoção Especial!", dateSent: "2025-01-01" },
    { id: 2, channel: "SMS", title: "Cupom de Desconto", dateSent: "2025-01-02" },
  ]);

  const addNotification = (notification:any) => {
    setNotifications((prev) => [...prev, { id: prev.length + 1, ...notification }]);
  };

  return { notifications, addNotification };
}

// Mock de notificações exportado separadamente
export const notificationsMock = [
  { id: 1, channel: "Email", title: "Promoção Especial!", dateSent: "2025-01-01" },
  { id: 2, channel: "SMS", title: "Cupom de Desconto", dateSent: "2025-01-02" },
  { id: 3, channel: "Web Push", title: "Atualização Disponível", dateSent: "2025-01-03" },
];
