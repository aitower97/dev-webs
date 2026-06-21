import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos de piscinas, instalaciones y trabajos realizados por Dialsa en Colmenar Viejo y la Sierra de Madrid.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Galería de Trabajos"
        subtitle="Proyectos realizados en Colmenar Viejo y la Sierra de Madrid."
        backgroundImage="/images/piscina-comunitaria.png"
      />

      <section className="py-32 bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((img, i) => (
              <SmoothReveal key={img.src} delay={i * 0.1}>
                <TiltCard className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
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
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.4}>
            <div className="mt-16 rounded-3xl bg-gray-50 p-12 text-center">
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
