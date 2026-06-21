"use client";

import { useState } from "react";

export function Header({
  businessName,
  navItems,
  phone,
  ctaLabel,
  ctaHref,
}: {
  businessName: string;
  navItems: { label: string; href: string }[];
  phone?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-bold text-primary-700">
          {businessName}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              {item.label}
            </a>
          ))}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="text-sm font-semibold text-primary-600"
            >
              {phone}
            </a>
          )}
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="block py-3 text-base font-semibold text-primary-600"
            >
              {phone}
            </a>
          )}
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="mt-2 block rounded-lg bg-primary-600 px-4 py-3 text-center text-base font-semibold text-white"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      )}
    </header>
  );
}
