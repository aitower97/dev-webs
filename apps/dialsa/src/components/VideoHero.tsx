"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export function VideoHero({
  videoSrc,
  posterSrc,
  children,
}: {
  videoSrc: string;
  posterSrc: string;
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Poster image — fallback while video loads */}
      <Image
        src={posterSrc}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Background video — scale(1.1) + blur(1px) hides WhatsApp compression artifacts */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: "scale(1.02)",
          filter: "blur(1px)",
          willChange: "transform",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/55 via-primary-900/30 to-primary-900/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-1 left-0 right-0 z-[1]" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "4vw", minHeight: "30px", maxHeight: "60px", display: "block" }}>
          <path fill="white" d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
