"use client";

import { useState } from "react";

export function ContactForm({
  submitLabel = "Enviar mensaje",
}: {
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Beta: simulamos envío
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">
          Mensaje enviado correctamente
        </p>
        <p className="mt-2 text-green-600">
          Nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <div>
        <label
          htmlFor="telefono"
          className="block text-sm font-medium text-gray-700"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-gray-700"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-700 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : submitLabel}
      </button>
    </form>
  );
}
