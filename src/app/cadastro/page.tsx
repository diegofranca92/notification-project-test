"use client";

import { LockIcon, MailIcon } from "@/components/icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function CadastroPage() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password123");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Bem-vindo de Volta
        </h1>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-2 mb-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" /> Login
          com Google
        </button>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Email
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MailIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
              required
              autoComplete="email"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Senha
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <LockIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none"
              required
              autoComplete="current-password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
