// Hook para gerenciar autenticação
import { useState, useEffect, useCallback } from "react";
import { getSession, signOut } from "next-auth/react";
import useSessionStore from "@/store/session";

export function useAuth() {
  const [loading, setLoading] = useState(status === "loading");
  const { currentSession, setSession } = useSessionStore();

  const handleGetSession = useCallback(async () => {
    const sessionData = await getSession();
    setSession(sessionData); // Atualiza a store com a sessão atual
  }, [setSession]); // Sem dependências externas, então ela será criada apenas uma vez.
  
  useEffect(() => {
    handleGetSession();
  }, [handleGetSession]);

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  const logout = async () => {
    await signOut();
  };

  return {
    user: currentSession?.user,
    loading,
    isAuthenticated: !!currentSession,
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
