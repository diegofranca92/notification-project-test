"use client";

import { useNotifications } from "@/hooks";

export default function NotificationTable() {
  const { notifications } = useNotifications();

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Canal</th>
          <th className="border border-gray-300 px-4 py-2">Título</th>
          <th className="border border-gray-300 px-4 py-2">Data de Envio</th>
        </tr>
      </thead>
      <tbody>
        {notifications.map((notification:any) => (
          <tr key={notification.id}>
            <td className="border border-gray-300 px-4 py-2">{notification.channel}</td>
            <td className="border border-gray-300 px-4 py-2">{notification.title}</td>
            <td className="border border-gray-300 px-4 py-2">{notification.dateSent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
