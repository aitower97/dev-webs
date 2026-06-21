"use client";

import { useState, useEffect } from "react";

export function RestaurantHeader({
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-xl py-2"
          : "bg-black/30 backdrop-blur-sm py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" className="relative z-10 shrink-0">
          <span
            className={`text-2xl font-extrabold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-primary-700" : "text-white"
            }`}
          >
            Las Dos Terrazas
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-semibold tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all hover:after:w-full ${
                scrolled
                  ? "text-gray-700 hover:text-primary-600 after:bg-primary-600"
                  : "text-white/90 hover:text-white after:bg-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${phone}`}
            className={`text-sm font-bold tracking-wide ${
              scrolled ? "text-primary-600" : "text-white"
            }`}
          >
            {phone}
          </a>
          <a
            href="/reservas"
            className={`rounded-xl px-6 py-3 text-sm font-bold transition-all hover:scale-105 ${
              scrolled
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 ring-1 ring-white/30"
            }`}
          >
            Reservar Mesa
          </a>
        </div>

        <button
          className="relative z-10 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg
            className={`h-7 w-7 ${scrolled ? "text-gray-700" : "text-white"}`}
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

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 border-t border-gray-100 bg-white px-6 pb-6 shadow-xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-base font-semibold text-gray-700 hover:text-primary-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${phone}`} className="block py-3 text-base font-bold text-primary-600">{phone}</a>
          <a href="/reservas" className="mt-3 block rounded-xl bg-primary-600 px-5 py-3.5 text-center text-base font-bold text-white shadow-lg">
            Reservar Mesa
          </a>
        </div>
      )}
    </header>
  );
}
