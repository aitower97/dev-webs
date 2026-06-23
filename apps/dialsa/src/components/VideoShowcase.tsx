"use client";

import { useRef, useState } from "react";

interface Video {
  src: string;
  title: string;
  poster: string;
}

export function VideoShowcase({ videos }: { videos: Video[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.src} video={video} />
      ))}
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black shadow-2xl">
      <div className="relative aspect-[9/16] sm:aspect-[3/4]">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={video.poster}
          className="h-full w-full object-cover"
          onClick={togglePlay}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Play/pause overlay */}
        <button
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="rounded-full bg-white/20 p-5 backdrop-blur-md transition-transform hover:scale-110">
            {isPlaying ? (
              <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
          <p className="text-sm font-bold text-white">{video.title}</p>
        </div>
      </div>
    </div>
  );
}
