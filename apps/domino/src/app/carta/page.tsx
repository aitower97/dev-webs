import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";
import { MENU_DEL_DIA, OFERTAS, TAPAS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Carta",
  description: "Carta de Las Dos Terrazas. Menú del día, tapas, raciones y ofertas en Las Tablas, Madrid.",
};

export default function CartaPage() {
  return (
    <>
      <PageHero tag="Buen provecho" title="Nuestra Carta" subtitle="Cocina casera con productos frescos cada día." backgroundImage="/images/menu-food.jpg" />

      <section className="py-24 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-4 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Menú del Día — {MENU_DEL_DIA.price}</h2>
              <p className="mt-3 text-gray-500">{MENU_DEL_DIA.includes}</p>
              <div className="mt-6"><SectionDivider variant="cutlery" /></div>
            </div>
          </SmoothReveal>

          <div className="mx-auto mt-12 max-w-4xl grid gap-8 sm:grid-cols-3">
            {[
              { title: "Primeros", items: MENU_DEL_DIA.primeros },
              { title: "Segundos", items: MENU_DEL_DIA.segundos },
              { title: "Postres", items: MENU_DEL_DIA.postres },
            ].map((section, i) => (
              <SmoothReveal key={section.title} delay={i * 0.15}>
                <TiltCard className="cursor-default h-full rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100 transition-all hover:shadow-xl">
                  <h3 className="mb-6 text-lg font-extrabold uppercase tracking-wider text-primary-600">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
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

      <section className="py-24 bg-gray-50">
        <Container>
          <SmoothReveal>
            <div className="mb-4 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Tapas y Raciones</h2>
              <div className="mt-6"><SectionDivider variant="line" /></div>
            </div>
          </SmoothReveal>

          <div className="mx-auto mt-12 max-w-3xl grid gap-4 sm:grid-cols-2">
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

      <section className="py-24 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-4 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Ofertas</h2>
              <div className="mt-6"><SectionDivider variant="dots" /></div>
            </div>
          </SmoothReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {OFERTAS.map((oferta, i) => {
              const icons = [
                <svg key="0" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8l-4 10-4-10z" /><line x1="12" y1="12" x2="12" y2="20" /><line x1="8" y1="20" x2="16" y2="20" /><circle cx="15" cy="5" r="1.5" fill="currentColor" /></svg>,
                <svg key="1" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="12" height="15" rx="2" /><path d="M16 9h2.5a2 2 0 012 2v3a2 2 0 01-2 2H16" /><path d="M4 6c0 0 1-3 6-3s6 3 6 3" /></svg>,
                <svg key="2" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="8" height="12" rx="1.5" transform="rotate(-10 6 14)" /><rect x="14" y="8" width="8" height="12" rx="1.5" transform="rotate(10 18 14)" /><path d="M5 8c0 0 .5-2 3.5-2s3.5 2 3.5 2" /><path d="M15 8c0 0 .5-2 3.5-2s3.5 2 3.5 2" /></svg>,
              ];
              return (
                <SmoothReveal key={oferta.title} delay={i * 0.15}>
                  <TiltCard className="cursor-default h-full rounded-3xl border-2 border-primary-100 bg-white p-8 text-center transition-all hover:border-primary-300 hover:shadow-xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">{icons[i]}</div>
                    <h3 className="mt-4 text-xl font-extrabold text-gray-900">{oferta.title}</h3>
                    <p className="mt-1 text-sm font-bold text-primary-600">{oferta.subtitle}</p>
                    <p className="mt-4 text-sm text-gray-600 leading-6">{oferta.description}</p>
                  </TiltCard>
                </SmoothReveal>
              );
            })}
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
