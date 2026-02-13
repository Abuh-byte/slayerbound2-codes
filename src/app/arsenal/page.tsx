"use client";

import { useEffect, useState } from "react";

export default function Arsenal() {
  const [codes, setCodes] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/codes")
      .then(res => res.json())
      .then(data => setCodes(data.active));
  }, []);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl mb-10">Registro dos Marcados</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {codes.map(c => (
          <div
            key={c.code}
            className="border border-yellow-500 p-6 rounded-xl hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">{c.code}</h2>
            <p className="mt-2 text-gray-400">{c.reward}</p>

            {c.isNew && (
              <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">
                NEW
              </span>
            )}

            <button
              onClick={() => copyCode(c.code)}
              className="mt-4 w-full bg-yellow-500 text-black py-2 rounded"
            >
              Copiar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
