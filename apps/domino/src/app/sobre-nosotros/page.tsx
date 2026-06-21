import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";
import { BUSINESS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { CountUp } from "@/components/CountUp";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: `Conoce ${BUSINESS.name}, bar restaurante en Las Tablas, Madrid.`,
};

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero tag="Nuestra historia" title="Sobre Nosotros" subtitle="El bar de toda la vida en Las Tablas." backgroundImage="/images/terrace.jpg" />

      <section className="py-32 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-8">
            <SmoothReveal>
              <p className="text-lg">
                <strong className="text-gray-900">{BUSINESS.name}</strong> nació con una idea clara: ofrecer comida casera de calidad a precio justo para los trabajadores y vecinos de Las Tablas.
              </p>
            </SmoothReveal>
            <SmoothReveal delay={0.1}>
              <p>Cada mañana preparamos menús del día con productos frescos, recetas tradicionales y el cariño de siempre. Por las tardes, somos el punto de encuentro para tomar algo después del trabajo con nuestras ofertas de cañas, tapas y raciones.</p>
            </SmoothReveal>
            <SmoothReveal delay={0.2}>
              <p>Nuestras dos terrazas son el lugar perfecto para disfrutar al aire libre en cualquier época del año. A 5 minutos de las principales oficinas de la zona, con un ambiente acogedor y un servicio rápido.</p>
            </SmoothReveal>
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-3">
            {[
              { end: 12, suffix: ",50€", label: "Menú completo" },
              { end: 5, suffix: " min", label: "De las oficinas" },
              { end: 2, suffix: "", label: "Terrazas" },
            ].map((stat, i) => (
              <SmoothReveal key={stat.label} delay={i * 0.15}>
                <TiltCard className="cursor-default rounded-3xl bg-primary-50 p-10 text-center">
                  <p className="text-5xl font-black text-primary-600">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.3}>
            <div className="mt-16 text-center">
              <MagneticButton href="/reservas" className="group rounded-2xl bg-primary-600 px-10 py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-700">
                <span className="flex items-center gap-3">Reservar mesa <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </Container>
      </section>
    </>
  );
}
