"use client";

import SetupForm from "@/components/SetupForm";

export default function WebPushSetupPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Configuração de Web Push</h1>
      <SetupForm channel="Web Push" />
    </div>
  );
}
