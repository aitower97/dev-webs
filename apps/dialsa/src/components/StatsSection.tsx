"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 20,
    prefix: "+",
    unit: "años",
    label: "de experiencia en la Sierra Norte",
  },
  {
    value: 200,
    prefix: "+",
    unit: "piscinas",
    label: "construidas en 20 años de trabajo",
  },
  {
    value: 5,
    prefix: "",
    unit: "municipios",
    label: "Colmenar, Soto del Real, Manzanares y más",
  },
  {
    value: 24,
    prefix: "",
    unit: "h",
    label: "tiempo de respuesta habitual",
  },
];

function Counter({
  value,
  prefix,
  unit,
  label,
}: (typeof STATS)[0]) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="font-display leading-none text-white" style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 700 }}>
        <span className="text-primary-300">{prefix}</span>
        {count}
      </p>
      <p className="mt-2 text-base font-bold uppercase tracking-[0.2em] text-primary-300">
        {unit}
      </p>
      <div className="mt-3 h-px w-8 bg-primary-600" />
      <p className="mt-3 max-w-[160px] text-sm leading-relaxed text-white/45">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-28">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-400">
            En números
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Años de trabajo hablan
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-16 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat) => (
            <Counter key={stat.unit} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
