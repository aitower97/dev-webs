"use client";

import Image from "next/image";
import { WaterSplash } from "./WaterSplash";

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
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/60 to-primary-900/40" />

      <WaterSplash />

      <div className="relative z-10 mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl"
          style={{
            opacity: 0,
            animation:
              "text-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-300">
            {tag}
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/70">
            {subtitle}
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "80px", display: "block" }}
        >
          <path
            fill="white"
            d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
