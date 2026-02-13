"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-8"
      >
        O que você busca hoje?
      </motion.h1>

      <div className="flex gap-6">
        <Link
          href="/arsenal"
          className="px-8 py-4 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          Entrar no Arsenal
        </Link>

        <Link
          href="/grimorio"
          className="px-8 py-4 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          Abrir o Grimório
        </Link>
      </div>
    </main>
  );
}
