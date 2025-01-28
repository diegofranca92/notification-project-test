"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full mb-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login com Google
        </button>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
