"use client";

import { useEffect, useState } from "react";

type Review = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`h-4 w-4 ${s <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [response, setResponse] = useState("");
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  async function generate() {
    setGenerating(true);
    const res = await fetch("/api/reviews/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review }),
    });
    const data = await res.json();
    setResponse(data.response ?? "Error generando respuesta");
    setGenerating(false);
  }

  async function copy() {
    await navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const date = new Date(review.time * 1000).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
      <div className="flex items-start gap-4">
        {review.profile_photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="h-10 w-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-primary-600">
              {review.author_name[0]}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{review.author_name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <Stars rating={review.rating} />
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
      </div>

      {review.text ? (
        <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
      ) : (
        <p className="text-sm text-gray-400 italic">Sin comentario escrito</p>
      )}

      {!response && (
        <button
          onClick={generate}
          disabled={generating}
          className="flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-60"
        >
          {generating ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Generando...
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Generar respuesta con IA
            </>
          )}
        </button>
      )}

      {response && (
        <div className="space-y-3">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-gray-200 p-4 text-sm text-gray-700 leading-relaxed focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none"
          />
          <div className="flex gap-2">
            <button
              onClick={copy}
              className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              {copied ? "¡Copiado!" : "Copiar respuesta"}
            </button>
            <button
              onClick={generate}
              disabled={generating}
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-60"
            >
              Regenerar
            </button>
          </div>
          <p className="text-xs text-gray-400">
            Copia la respuesta y pégala en{" "}
            <a
              href="https://business.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline hover:text-primary-700"
            >
              Google Business Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export function AdminDashboard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setReviews(data.reviews ?? []);
          setRating(data.rating ?? null);
          setTotal(data.total ?? null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error conectando con Google");
        setLoading(false);
      });
  }, []);

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary-900 flex items-center justify-center text-white text-sm font-bold">
              D
            </div>
            <span className="font-bold text-gray-900">Panel Dialsa</span>
          </div>
          <div className="flex items-center gap-4">
            {rating && (
              <div className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600">
                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{rating}</span>
                <span className="text-gray-400">({total} reseñas)</span>
              </div>
            )}
            <button
              onClick={logout}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Reseñas de Google</h1>
          <p className="mt-1 text-sm text-gray-500">
            Genera respuestas con IA, edítalas y cópialas a Google Business.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <svg className="h-6 w-6 animate-spin mr-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Cargando reseñas...
          </div>
        )}

        {error && (
          <div className="rounded-2xl bg-red-50 border border-red-100 p-6 text-center">
            <p className="text-sm font-semibold text-red-700">{error}</p>
            <p className="mt-1 text-xs text-red-500">
              Comprueba que GOOGLE_PLACES_API_KEY y GOOGLE_PLACE_ID están configurados en .env.local
            </p>
          </div>
        )}

        {!loading && !error && reviews.length === 0 && (
          <div className="rounded-2xl bg-white border border-gray-100 p-12 text-center">
            <p className="text-gray-500">No hay reseñas disponibles</p>
          </div>
        )}

        <div className="space-y-4">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </main>
    </div>
  );
}
