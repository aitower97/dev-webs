"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { TiltCard } from "./TiltCard";
import { Lightbox } from "./Lightbox";
import type { GalleryImage, GalleryCategory } from "@/lib/constants";
import { GALLERY_CATEGORIES } from "@/lib/constants";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "todas"
        ? images
        : images.filter((img) => img.category === activeCategory),
    [images, activeCategory]
  );

  return (
    <>
      {/* Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat.key
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
            }`}
          >
            {cat.label}
            <span className="ml-2 text-xs opacity-70">
              {cat.key === "todas"
                ? images.length
                : images.filter((img) => img.category === cat.key).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img, i) => (
          <div
            key={img.src}
            className="animate-fade-in-up"
            style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}
          >
            <TiltCard className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg">
              <button
                onClick={() => setLightboxIndex(i)}
                className="block w-full"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary-900/0 transition-all duration-500 group-hover:bg-primary-900/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <p className="mt-4 px-6 text-center text-sm font-medium text-white">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </button>
            </TiltCard>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % filtered.length)
          }
        />
      )}
    </>
  );
}
