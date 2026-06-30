"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/piscinas/piscina-jardin-colmenar.jpg",
    alt: "Piscina privada con jardín en Colmenar Viejo",
  },
  {
    src: "/images/piscinas/piscina-piedra-natural.jpg",
    alt: "Piscina de diseño con acabado en piedra natural",
  },
  {
    src: "/images/piscinas/piscina-cesped-artificial.jpg",
    alt: "Piscina con jardín y césped artificial",
  },
  {
    src: "/images/piscinas/piscina-escaleras-integradas.jpg",
    alt: "Piscina moderna con escaleras integradas",
  },
  {
    src: "/images/piscinas/jacuzzi-gresite-circular.jpg",
    alt: "Jacuzzi circular con acabado en gresite",
  },
];

export function PhotoHero({ children }: { children: React.ReactNode }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Slides — crossfade con Ken Burns */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            style={{
              animation: i === idx ? "slow-zoom 8s ease-out forwards" : "none",
              transform: i !== idx ? "scale(1.08)" : undefined,
            }}
          />
        </div>
      ))}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/40 to-primary-900/80" />

      {/* Viñeta lateral */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(13,59,111,0.45) 100%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Dots de navegación */}
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Ola divisora */}
      <div className="absolute -bottom-1 left-0 right-0 z-[1]" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "4vw", minHeight: "30px", maxHeight: "60px", display: "block" }}
        >
          <path
            fill="white"
            d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
