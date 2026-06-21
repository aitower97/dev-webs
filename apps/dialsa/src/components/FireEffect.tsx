"use client";

export function FireEffect() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ember particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            background: i % 2 === 0 ? "#ef4444" : "#fbbf24",
            left: `${20 + i * 8}%`,
            bottom: "10%",
            animation: `ember-float ${2 + i * 0.3}s ease-out infinite ${i * 0.5}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Warm glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(220,38,38,0.12) 0%, rgba(220,38,38,0.04) 50%, transparent 80%)",
          animation: "fire-flicker 3s ease-in-out infinite",
        }}
      />

      {/* Side glows */}
      <div
        className="absolute bottom-0 left-1/4 h-24 w-32"
        style={{
          background:
            "radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)",
          animation: "fire-flicker 2s ease-in-out infinite 0.5s",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-24 w-32"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, transparent 70%)",
          animation: "fire-flicker 2.5s ease-in-out infinite 1s",
        }}
      />
    </div>
  );
}
