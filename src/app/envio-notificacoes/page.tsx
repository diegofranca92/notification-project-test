"use client";

import { useState } from "react";

export default function EnvioNotificacoesPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Notificação enviada:", { title, message });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Envio de Notificações</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Mensagem</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <button onClick={handleSend} className="bg-blue-500 text-white py-2 px-4 rounded">
        Enviar Notificação
      </button>
    </div>
  );
}
