"use client";

import NotificationTable from "@/components/NotificationTable";



export default function HistoricoPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Histórico de Notificações</h1>
      <NotificationTable />
    </div>
  );
}
