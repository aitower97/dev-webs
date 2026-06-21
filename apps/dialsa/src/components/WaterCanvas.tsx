"use client";

import { useEffect, useRef } from "react";

export function WaterCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const cols = Math.ceil(w / 4);
    const rows = Math.ceil(h / 4);
    const current = new Float32Array(cols * rows);
    const previous = new Float32Array(cols * rows);
    const damping = 0.97;
    let animId: number;

    function idx(x: number, y: number) {
      return y * cols + x;
    }

    function ripple(cx: number, cy: number, strength: number) {
      const gx = Math.floor(cx / 4);
      const gy = Math.floor(cy / 4);
      for (let dy = -3; dy <= 3; dy++) {
        for (let dx = -3; dx <= 3; dx++) {
          const x = gx + dx;
          const y = gy + dy;
          if (x >= 0 && x < cols && y >= 0 && y < rows) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 3) {
              current[idx(x, y)] = strength * (1 - dist / 3);
            }
          }
        }
      }
    }

    function step() {
      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const i = idx(x, y);
          current[i] =
            (previous[idx(x - 1, y)] +
              previous[idx(x + 1, y)] +
              previous[idx(x, y - 1)] +
              previous[idx(x, y + 1)]) /
              2 -
            current[i];
          current[i] *= damping;
        }
      }
      previous.set(current);
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const val = current[idx(x, y)];
          if (Math.abs(val) > 0.5) {
            const alpha = Math.min(Math.abs(val) / 30, 0.25);
            ctx!.fillStyle =
              val > 0
                ? `rgba(147, 197, 253, ${alpha})`
                : `rgba(255, 255, 255, ${alpha})`;
            ctx!.fillRect(x * 4, y * 4, 4, 4);
          }
        }
      }
    }

    function autoRipple() {
      ripple(
        Math.random() * w,
        Math.random() * h,
        15 + Math.random() * 20
      );
    }

    let rippleInterval = setInterval(autoRipple, 1200);

    function handleMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      ripple(e.clientX - rect.left, e.clientY - rect.top, 25);
    }

    canvas.addEventListener("mousemove", handleMove);

    function loop() {
      step();
      draw();
      animId = requestAnimationFrame(loop);
    }
    loop();

    function handleResize() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w;
      canvas!.height = h;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(rippleInterval);
      canvas!.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto absolute inset-0 ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
