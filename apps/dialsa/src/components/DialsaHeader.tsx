"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function DialsaHeader({
  navItems,
  phone,
}: {
  navItems: { label: string; href: string }[];
  phone: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = menuOpen
    ? "bg-primary-900 py-5"
    : scrolled
    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
    : "bg-primary-900 py-5 lg:bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${headerBg}`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <nav className="mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          <a href="/" className="shrink-0">
            <Image
              src="/images/logos/logo-azul.png"
              alt="Dialsa — Piscinas y Calefacción"
              width={280}
              height={100}
              className={`transition-all duration-500 ${
                scrolled && !menuOpen
                  ? "h-10 w-auto"
                  : "h-14 w-auto sm:h-16 brightness-0 invert"
              }`}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`flex items-center transition-all duration-500 ${
                scrolled
                  ? "rounded-full bg-white border border-gray-200 shadow-md p-1.5 gap-0.5"
                  : "gap-1"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                    scrolled
                      ? "text-gray-700 hover:bg-white hover:text-primary-600 hover:shadow-sm"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={`tel:${phone}`}
              className={`ml-1 text-sm font-bold tracking-wide transition-colors ${
                scrolled
                  ? "text-primary-700 hover:text-primary-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {phone}
            </a>

            <a
              href="/contacto"
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-100 ${
                scrolled
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
                  : "bg-white text-primary-800 hover:bg-primary-50"
              }`}
            >
              Presupuesto
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              className={`h-7 w-7 transition-colors ${scrolled && !menuOpen ? "text-gray-700" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu overlay — overflow-y:scroll + overscroll-behavior:contain
          permite scroll interno en móviles pequeños sin que el body se mueva */}
      <div
        className={`fixed inset-0 z-[190] flex flex-col lg:hidden transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(150deg, #0d3b6f 0%, #061829 100%)",
          overflowY: "scroll",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Nav links — pt dinámico: altura header (5rem) + safe-area-inset-top */}
        <nav
          className="flex-shrink-0 flex flex-col justify-center px-8 pb-2"
          style={{ paddingTop: "calc(6rem + env(safe-area-inset-top, 0px))" }}
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-[1.75rem] font-bold text-white/70 hover:text-white transition-colors"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.45s ${i * 0.07}s ease, transform 0.45s ${i * 0.07}s ease`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div
          className="flex-shrink-0 space-y-3 px-8 pt-6 pb-12"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s 0.36s ease, transform 0.5s 0.36s ease",
          }}
        >
          <a
            href="/contacto"
            className="block rounded-2xl bg-white py-4 text-center text-lg font-bold text-primary-900"
            onClick={() => setMenuOpen(false)}
          >
            Pide presupuesto gratis
          </a>
          <a
            href={`tel:${phone}`}
            className="block rounded-2xl border border-white/20 bg-white/5 py-4 text-center text-base font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            {phone}
          </a>
        </div>
      </div>
    </>
  );
}
