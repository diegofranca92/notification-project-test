"use client";

import CadastroPage from "@/app/cadastro/page";
import { useAuth } from "@/hooks";

export default function BemVindoPage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
            <h1 className="text-4xl font-bold">
              Bem-vindo {user.name}, ao Sistema de Notificações
            </h1>
            <p className="text-lg max-w-xl">
              Gerencie notificações via Web Push, E-mail e SMS de forma simples
              e eficaz.
            </p>

            <div className="mt-4 flex gap-4">
              <button className="px-6 py-2 bg-white text-indigo-700 font-semibold rounded shadow hover:bg-gray-200">
                Saiba Mais
              </button>
              <button className="px-6 py-2 border border-white text-white font-semibold rounded shadow hover:bg-white hover:text-indigo-700">
                Contato
              </button>
            </div>
          </main>
        </div>
      ) : (
        <CadastroPage />
      )}
    </div>
  );
}
