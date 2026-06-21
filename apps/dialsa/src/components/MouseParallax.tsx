"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function MouseParallax({
  children,
  intensity = 20,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el!.style.setProperty("--mx", `${x * intensity}px`);
      el!.style.setProperty("--my", `${y * intensity}px`);
    }

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [intensity]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
