'use client'
import { Notification } from '@/interfaces/notification'
import useSessionStore from '@/store/session'
import { getSession, signOut } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'

export function useAuth() {
  const { currentSession, setSession } = useSessionStore()

  const handleGetSession = useCallback(async () => {
    const sessionData = await getSession()
    setSession(sessionData) // Atualiza a store com a sessão atual
  }, [setSession]) // Sem dependências externas, então ela será criada apenas uma vez.

  useEffect(() => {
    handleGetSession()
  }, [handleGetSession])

  const logout = async () => {
    await signOut()
  }

  return {
    user: currentSession?.user,
    isAuthenticated: !!currentSession,
    logout
  }
}

// Hook para gerenciar notificações simuladas
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      channel: 'Email',
      title: 'Promoção Especial!',
      dateSent: '2025-01-01'
    },
    {
      id: 2,
      channel: 'SMS',
      title: 'Cupom de Desconto',
      dateSent: '2025-01-02'
    }
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addNotification = (notification: any) => {
    setNotifications(prev => [
      ...prev,
      { id: prev.length + 1, ...notification }
    ])
  }

  return { notifications, addNotification }
}

// Mock de notificações exportado separadamente
export const notificationsMock = [
  {
    id: 1,
    channel: 'Email',
    title: 'Promoção Especial!',
    dateSent: '2025-01-01'
  },
  { id: 2, channel: 'SMS', title: 'Cupom de Desconto', dateSent: '2025-01-02' },
  {
    id: 3,
    channel: 'Web Push',
    title: 'Atualização Disponível',
    dateSent: '2025-01-03'
  }
]
