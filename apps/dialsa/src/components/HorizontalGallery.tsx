"use client";

import { useRef } from "react";
import Image from "next/image";

export function HorizontalGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[3/4] w-[70vw] shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[45vw] lg:w-[30vw]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {img.alt}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
      >
        <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
      >
        <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
