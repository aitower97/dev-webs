"use client";

import { useEffect, useState } from "react";

export function WaterSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* Gotas CSS — caen desde arriba como si salpicaran */}
      {[...Array(20)].map((_, i) => {
        const left = 10 + Math.random() * 80;
        const size = 6 + Math.random() * 14;
        const delay = Math.random() * 0.4;
        const duration = 1.2 + Math.random() * 0.8;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              left: `${left}%`,
              top: "-5%",
              width: size,
              height: size * 1.4,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              boxShadow: `inset -${size/4}px -${size/4}px ${size/2}px rgba(255,255,255,0.4), 0 0 ${size}px rgba(173,216,230,0.3)`,
              animation: `drop-fall ${duration}s cubic-bezier(0.4, 0, 1, 1) ${delay}s forwards`,
            }}
          />
        );
      })}

      {/* Onda circular sutil desde el centro */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
        style={{
          width: 0,
          height: 0,
          animation: "ripple-out 2s ease-out 0.5s forwards",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
        style={{
          width: 0,
          height: 0,
          animation: "ripple-out 2.5s ease-out 0.8s forwards",
        }}
      />

      <style>{`
        @keyframes drop-fall {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          70% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes ripple-out {
          0% { width: 0; height: 0; opacity: 0.5; }
          100% { width: 100vw; height: 100vw; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
