import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { BUSINESS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { CountUp } from "@/components/CountUp";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: `Conoce ${BUSINESS.legalName}, empresa familiar en Colmenar Viejo.`,
};

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        tag="Quiénes somos"
        title="Sobre Nosotros"
        subtitle="Empresa familiar al servicio de Colmenar Viejo y la Sierra Norte."
        backgroundImage="/images/hero-pool.jpg"
      />

      <section className="py-32 bg-white">
        <Container>
          <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 lg:items-center">
            <SmoothReveal direction="left">
              <TiltCard className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/logo-azul.png"
                  alt={BUSINESS.legalName}
                  width={500}
                  height={250}
                  className="w-full bg-white p-12"
                />
              </TiltCard>
            </SmoothReveal>

            <SmoothReveal direction="right" delay={0.2}>
              <div className="space-y-6 text-gray-600 leading-8">
                <p className="text-lg">
                  <strong className="text-gray-900">{BUSINESS.legalName}</strong>{" "}
                  es una empresa familiar de Colmenar Viejo dedicada a ofrecer
                  soluciones integrales para el hogar y comunidades.
                </p>
                <p>
                  Nos especializamos en piscinas, calefacción, chimeneas,
                  riego automático, gas, fontanería y aire acondicionado.
                </p>
                <p>
                  Trabajamos en Colmenar Viejo y toda la Sierra Norte de Madrid.
                  Cercanía, calidad y atención personalizada.
                </p>
              </div>
            </SmoothReveal>
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-3">
            {[
              { end: 500, suffix: "+", label: "Proyectos realizados" },
              { end: 15, suffix: "+", label: "Municipios" },
              { end: 100, suffix: "%", label: "Compromiso" },
            ].map((stat, i) => (
              <SmoothReveal key={stat.label} delay={i * 0.15}>
                <TiltCard className="cursor-default rounded-3xl bg-primary-50 p-10 text-center">
                  <p className="text-5xl font-black text-primary-600">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </p>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.3}>
            <div className="mt-16 text-center">
              <MagneticButton
                href="/contacto"
                className="group rounded-2xl bg-primary-600 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 hover:shadow-xl"
              >
                <span className="flex items-center gap-3">
                  Contactar con nosotros
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </Container>
      </section>
    </>
  );
}
