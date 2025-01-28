"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      await signIn("credentials", { email, password });
    } else {
      // Simular lógica de registro
      console.log("Cadastro:", { name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      {!isLogin && (
        <div className="mb-4">
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required={!isLogin}
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        {isLogin ? "Entrar" : "Cadastrar"}
      </button>
      <p className="text-sm text-center mt-4">
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
        <button type="button" onClick={toggleMode} className="text-blue-500 underline">
          {isLogin ? "Cadastre-se" : "Faça login"}
        </button>
      </p>
    </form>
  );
}
