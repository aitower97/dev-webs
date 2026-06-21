"use client";

import { useState } from "react";

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-green-50 p-10 text-center">
        <span className="text-5xl">✓</span>
        <p className="mt-4 text-xl font-bold text-green-800">Reserva recibida</p>
        <p className="mt-2 text-green-600">Te confirmaremos por teléfono lo antes posible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700">Nombre</label>
          <input type="text" id="nombre" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700">Teléfono</label>
          <input type="tel" id="telefono" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="fecha" className="block text-sm font-semibold text-gray-700">Fecha</label>
          <input type="date" id="fecha" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
        </div>
        <div>
          <label htmlFor="hora" className="block text-sm font-semibold text-gray-700">Hora</label>
          <select id="hora" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500">
            <option value="">Seleccionar</option>
            {["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00"].map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="personas" className="block text-sm font-semibold text-gray-700">Personas</label>
          <select id="personas" required className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
            ))}
            <option value="10+">Más de 10</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="notas" className="block text-sm font-semibold text-gray-700">Notas (opcional)</label>
        <textarea id="notas" rows={3} placeholder="Alergias, celebración especial, terraza..." className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500" style={{ resize: "vertical" }} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-primary-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-700 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Reservar Mesa"}
      </button>
    </form>
  );
}
