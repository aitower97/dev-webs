"use client";

import { useEffect, useState } from "react";

export function SteamEffect() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* Columnas de vapor que suben */}
      {[...Array(12)].map((_, i) => {
        const left = 15 + Math.random() * 70;
        const size = 30 + Math.random() * 50;
        const delay = Math.random() * 1;
        const duration = 2.5 + Math.random() * 1.5;

        return (
          <div
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
              animation: `steam-rise ${duration}s ease-out ${delay}s forwards`,
            }}
          />
        );
      })}
    </div>
  );
}
