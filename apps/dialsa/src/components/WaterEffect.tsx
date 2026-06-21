"use client";

export function WaterEffect() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ripples */}
      <div
        className="absolute rounded-full border border-white/10"
        style={{
          width: 300,
          height: 300,
          bottom: "10%",
          right: "10%",
          animation: "water-ripple 4s ease-out infinite",
        }}
      />
      <div
        className="absolute rounded-full border border-white/8"
        style={{
          width: 200,
          height: 200,
          bottom: "20%",
          right: "25%",
          animation: "water-ripple 4s ease-out infinite 1.5s",
        }}
      />
      <div
        className="absolute rounded-full border border-white/6"
        style={{
          width: 400,
          height: 400,
          bottom: "5%",
          left: "60%",
          animation: "water-ripple 5s ease-out infinite 0.8s",
        }}
      />

      {/* Shimmer waves */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "water-shimmer 4s linear infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.05) 30%, rgba(59,130,246,0.1) 50%, rgba(59,130,246,0.05) 70%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "water-shimmer 6s linear infinite 1s",
        }}
      />

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: 6 + i * 3,
            height: 6 + i * 3,
            left: `${15 + i * 14}%`,
            bottom: "5%",
            animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
