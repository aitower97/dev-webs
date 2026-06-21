import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";
import { MENU_DEL_DIA, OFERTAS, TAPAS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Carta",
  description: "Carta de Las Dos Terrazas. Menú del día, tapas, raciones y ofertas de tarde en Las Tablas, Madrid.",
};

export default function CartaPage() {
  return (
    <>
      <PageHero tag="Buen provecho" title="Nuestra Carta" subtitle="Cocina casera con productos frescos cada día." backgroundImage="/images/menu-food.jpg" />

      {/* Menú del día */}
      <section className="py-24 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Menú del Día — {MENU_DEL_DIA.price}</h2>
              <p className="mt-3 text-gray-500">{MENU_DEL_DIA.includes}</p>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </div>
          </SmoothReveal>

          <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-3">
            {[
              { title: "Primeros", items: MENU_DEL_DIA.primeros },
              { title: "Segundos", items: MENU_DEL_DIA.segundos },
              { title: "Postres", items: MENU_DEL_DIA.postres },
            ].map((section, i) => (
              <SmoothReveal key={section.title} delay={i * 0.15}>
                <TiltCard className="cursor-default rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100">
                  <h3 className="mb-6 text-lg font-extrabold uppercase tracking-wider text-primary-600">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-700">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tapas y raciones */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SmoothReveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Tapas y Raciones</h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </div>
          </SmoothReveal>

          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
            {TAPAS.map((tapa, i) => (
              <SmoothReveal key={tapa} delay={i * 0.05}>
                <div className="rounded-2xl bg-white px-6 py-4 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary-200">
                  <span className="font-semibold text-gray-800">{tapa}</span>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ofertas */}
      <section className="py-24 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Ofertas</h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-accent-500 to-primary-600" />
            </div>
          </SmoothReveal>

          <div className="grid gap-8 sm:grid-cols-3">
            {OFERTAS.map((oferta, i) => (
              <SmoothReveal key={oferta.title} delay={i * 0.15}>
                <TiltCard className="cursor-default h-full rounded-3xl border-2 border-primary-100 bg-white p-8 text-center transition-all hover:border-primary-300 hover:shadow-xl">
                  <span className="text-5xl">{oferta.icon}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-gray-900">{oferta.title}</h3>
                  <p className="mt-1 text-sm font-bold text-primary-600">{oferta.subtitle}</p>
                  <p className="mt-4 text-sm text-gray-600 leading-6">{oferta.description}</p>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.3}>
            <div className="mt-14 text-center">
              <MagneticButton href="/reservas" className="group rounded-2xl bg-primary-600 px-10 py-4 font-bold text-white shadow-lg transition-all hover:bg-primary-700">
                <span className="flex items-center gap-3">Reservar mesa <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </Container>
      </section>
    </>
  );
}
