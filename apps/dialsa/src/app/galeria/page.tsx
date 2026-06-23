import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";
import { GALLERY_IMAGES, VIDEOS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { VideoShowcase } from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos y vídeos de piscinas, chimeneas, obras e instalaciones realizadas por Dialsa en Colmenar Viejo y la Sierra de Madrid.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Galería de Trabajos"
        subtitle="Proyectos realizados en Colmenar Viejo y la Sierra de Madrid."
        backgroundImage="/images/piscinas/piscina-jardin-colmenar.jpg"
      />

      {/* Fotos */}
      <section className="py-32 bg-white">
        <Container>
          <GalleryGrid images={GALLERY_IMAGES} />
        </Container>
      </section>

      {/* Vídeos */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SmoothReveal>
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">En acción</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Vídeos
              </h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
            </div>
          </SmoothReveal>
          <SmoothReveal delay={0.2}>
            <div className="mt-16">
              <VideoShowcase videos={VIDEOS} />
            </div>
          </SmoothReveal>
        </Container>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-white">
        <Container>
          <SmoothReveal>
            <div className="rounded-3xl bg-gray-50 p-12 text-center">
              <p className="text-lg text-gray-600">Más trabajos en Instagram</p>
              <a
                href="https://www.instagram.com/dialsa.pyc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 text-2xl font-extrabold text-primary-600 transition-all hover:text-primary-700 hover:gap-4"
              >
                @dialsa.pyc
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </SmoothReveal>
        </Container>
      </section>
    </>
  );
}
