"use client";

import { useState } from "react";

interface SetupFormProps {
  channel: "Web Push" | "Email" | "SMS";
}

export default function SetupForm({ channel }: SetupFormProps) {
  const [formData, setFormData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Configurações de ${channel} salvas:`, formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow"
    >
      {channel === "Web Push" && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium">Nome do Site</label>
            <input
              type="text"
              name="siteName"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Endereço do Site
            </label>
            <input
              type="url"
              name="siteUrl"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </>
      )}
      {channel === "Email" && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium">Servidor SMTP</label>
            <input
              type="text"
              name="smtpServer"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Porta</label>
            <input
              type="number"
              name="port"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </>
      )}
      {channel === "SMS" && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium">Provedor</label>
            <input
              type="text"
              name="provider"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Salvar Configurações
      </button>
    </form>
  );
}
