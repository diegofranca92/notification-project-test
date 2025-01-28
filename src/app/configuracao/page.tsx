"use client";

import { useState } from "react";

export default function ConfiguracaoPage() {
  const [appName, setAppName] = useState("");
  const [channels, setChannels] = useState<string[]>([]);

  const handleChannelChange = (channel: string) => {
    setChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]
    );
  };

  const handleSave = () => {
    console.log("App Configurado:", { appName, channels });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Configuração do Aplicativo</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nome do Aplicativo</label>
        <input
          type="text"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Canais de Integração</h2>
        <div>
          {["Web Push", "E-mail", "SMS"].map((channel) => (
            <label key={channel} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={channels.includes(channel)}
                onChange={() => handleChannelChange(channel)}
                className="mr-2"
              />
              {channel}
            </label>
          ))}
        </div>
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded">
        Salvar Configurações
      </button>
    </div>
  );
}
