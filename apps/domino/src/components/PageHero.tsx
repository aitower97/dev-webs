"use client";

import Image from "next/image";
import { SteamEffect } from "./SteamEffect";

export function PageHero({
  title,
  subtitle,
  tag,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  tag: string;
  backgroundImage: string;
}) {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden pb-20 pt-28">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        style={{ animation: "slow-zoom 25s ease-in-out infinite alternate" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

      <SteamEffect />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div
          className="max-w-3xl"
          style={{
            opacity: 0,
            animation: "text-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent-400">{tag}</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/70">{subtitle}</p>
        </div>
      </div>

      {/* Fade transition — no wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
