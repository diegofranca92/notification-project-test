"use client";

import SetupForm from "@/components/SetupForm";

export default function SMSSetupPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Configuração de SMS</h1>
      <SetupForm channel="SMS" />
    </div>
  );
}
