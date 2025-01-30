"use client";
import { useAuth } from "@/hooks";
import Link from "next/link";
import { GithubIcon } from "./icons";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Link
          href="https://github.com/diegofranca92/notification-project-test"
          className="flex gap-4"
        >
          <GithubIcon /> Repo Projeto
        </Link>
        <div className="space-x-4">
          {isAuthenticated && (
            <>
              <Link href="/configuracao" className="hover:underline">
                Configuração
              </Link>
              <Link href="/setup/web-push" className="hover:underline">
                Web Push
              </Link>
              <Link href="/setup/email" className="hover:underline">
                Email
              </Link>
              <Link href="/setup/sms" className="hover:underline">
                SMS
              </Link>
              <Link href="/historico" className="hover:underline">
                Histórico
              </Link>
              <Link href="/envio-notificacoes" className="hover:underline">
                Envio
              </Link>
              <button
                onClick={logout}
                className="ml-4 bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              >
                Sair
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
