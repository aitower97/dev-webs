"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setShow(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "true");
    setShow(false);
  }

  function reject() {
    localStorage.setItem("cookies-accepted", "false");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900/95 backdrop-blur-sm p-4 sm:p-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          Utilizamos cookies propias y analíticas para mejorar tu experiencia.{" "}
          <a href="/politica-cookies" className="underline text-white hover:text-primary-300">
            Más información
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-xl border border-gray-500 px-6 py-2.5 text-sm font-bold text-gray-300 transition-all hover:border-gray-300 hover:text-white"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
