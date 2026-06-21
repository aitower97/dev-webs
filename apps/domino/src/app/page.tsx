import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { LocalBusinessJsonLd } from "@dev-webs/seo";
import { BUSINESS, MENU_DEL_DIA, OFERTAS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { SteamEffect } from "@/components/SteamEffect";
import { CountUp } from "@/components/CountUp";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd
        data={{
          type: "Restaurant",
          name: BUSINESS.legalName,
          description: BUSINESS.description,
          url: BUSINESS.url,
          telephone: BUSINESS.phone,
          address: BUSINESS.fullAddress,
          geo: BUSINESS.geo,
          openingHours: ["Mo-Fr 06:15-23:00", "Sa 09:30-23:30"],
          servesCuisine: ["Española", "Casera", "Tapas"],
          priceRange: "€€",
        }}
      />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image src="/images/hero-restaurant.jpg" alt="Las Dos Terrazas" fill className="object-cover" priority style={{ animation: "slow-zoom 20s ease-in-out infinite alternate" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/90" />
        <SteamEffect />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center pt-24 sm:pt-28">
            <h1
              className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-8xl"
              style={{ opacity: 0, animation: "text-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards" }}
            >
              Las Dos
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">Terrazas</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 sm:text-xl" style={{ opacity: 0, animation: "text-reveal 1s ease-out 0.7s forwards" }}>
              Bar Restaurante en Las Tablas, Madrid
            </p>

            <p className="mt-8 max-w-xl text-xl text-white/80 leading-relaxed" style={{ opacity: 0, animation: "text-reveal 1s ease-out 1s forwards" }}>
              Menús del día caseros, tapas, raciones y el mejor plan after work de la zona.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5" style={{ opacity: 0, animation: "text-reveal 1s ease-out 1.3s forwards" }}>
              <MagneticButton href="/reservas" className="group rounded-2xl bg-primary-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:bg-primary-700">
                <span className="flex items-center gap-3">
                  Reservar Mesa
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>
              <MagneticButton href="/carta" className="glass rounded-2xl px-10 py-5 text-lg font-semibold text-white">
                <span className="flex items-center gap-3">Ver Carta</span>
              </MagneticButton>
            </div>

            <div className="relative z-[60] mt-10" style={{ animation: "float 3s ease-in-out infinite" }}>
              <div className="flex flex-col items-center gap-2 text-white/50">
                <span className="text-sm font-bold uppercase tracking-widest">Scroll</span>
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 z-[1]" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "4vw", minHeight: "30px", maxHeight: "60px", display: "block" }}>
            <path fill="white" d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* MENÚ DEL DÍA */}
      <section className="relative pb-32 pt-16 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-16 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">Cada día</p>
              <h2 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">Menú del Día</h2>
              <p className="mt-4 text-2xl font-black text-primary-600">{MENU_DEL_DIA.price}</p>
              <p className="mt-1 text-gray-500">{MENU_DEL_DIA.includes}</p>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </div>
          </SmoothReveal>

          <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-3">
            {[
              { title: "Primeros", items: MENU_DEL_DIA.primeros, color: "primary" },
              { title: "Segundos", items: MENU_DEL_DIA.segundos, color: "accent" },
              { title: "Postres", items: MENU_DEL_DIA.postres, color: "primary" },
            ].map((section, i) => (
              <SmoothReveal key={section.title} delay={i * 0.15}>
                <TiltCard className="cursor-default rounded-3xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl">
                  <h3 className={`mb-6 text-lg font-extrabold uppercase tracking-wider text-${section.color}-600`}>{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-700">
                        <span className={`h-2 w-2 shrink-0 rounded-full bg-${section.color}-500`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.3}>
            <div className="mt-12 text-center">
              <MagneticButton href="/carta" className="group rounded-2xl border-2 border-primary-600 px-10 py-4 font-bold text-primary-600 transition-colors hover:bg-primary-600 hover:text-white">
                <span className="flex items-center gap-3">
                  Ver carta completa
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </Container>

        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "4vw", minHeight: "30px", maxHeight: "60px", display: "block" }}>
            <path className="fill-primary-900" d="M0,30 C360,55 720,5 1080,35 C1260,45 1380,15 1440,25 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* OFERTAS */}
      <section className="relative overflow-hidden py-24 bg-primary-900">
        <Container className="relative z-10">
          <SmoothReveal>
            <div className="mb-16 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-400">No te lo pierdas</p>
              <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Ofertas y Promos</h2>
            </div>
          </SmoothReveal>

          <div className="grid gap-8 sm:grid-cols-3">
            {OFERTAS.map((oferta, i) => (
              <SmoothReveal key={oferta.title} delay={i * 0.15}>
                <TiltCard className="cursor-default h-full rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm ring-1 ring-white/10 transition-all hover:bg-white/20 hover:shadow-xl">
                  <span className="text-5xl">{oferta.icon}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-white">{oferta.title}</h3>
                  <p className="mt-1 text-sm font-bold text-accent-400">{oferta.subtitle}</p>
                  <p className="mt-4 text-sm text-white/70 leading-6">{oferta.description}</p>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "4vw", minHeight: "30px", maxHeight: "60px", display: "block" }}>
            <path fill="#f9fafb" d="M0,35 C240,10 480,55 720,30 C960,5 1200,50 1440,25 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="pt-16 pb-32 bg-gray-50">
        <Container>
          <SmoothReveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">¿Por qué Las Dos Terrazas?</h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </div>
          </SmoothReveal>

          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { title: "Cocina casera", desc: "Productos frescos cada mañana. Recetas de siempre con el cariño de un bar de barrio.", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
              { title: "A 5 min de tu oficina", desc: "En pleno corazón de Las Tablas, junto a las principales oficinas de la zona.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              { title: "Terraza increíble", desc: "Dos terrazas para disfrutar al aire libre. El mejor sitio para comer o tomar algo.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            ].map((item, i) => (
              <SmoothReveal key={item.title} delay={i * 0.15}>
                <TiltCard className="group h-full cursor-default rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition-all duration-500 hover:border-primary-200 hover:shadow-2xl">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">{item.title}</h3>
                  <p className="mt-4 text-gray-500 leading-7">{item.desc}</p>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA RESERVA */}
      <section className="relative overflow-hidden">
        <div style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: "4vw", minHeight: "30px", maxHeight: "60px", display: "block" }}>
            <path className="fill-primary-900" d="M0,25 C240,55 480,5 720,30 C960,55 1200,10 1440,35 L1440,60 L0,60 Z" />
          </svg>
        </div>
        <div className="relative bg-primary-900 pb-32 pt-16">
          <Container className="relative z-10 text-center">
            <SmoothReveal>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">¿Vienes a comer?</h2>
              <p className="mx-auto mt-8 max-w-xl text-xl text-white/70">Reserva tu mesa o ven directamente. Te esperamos.</p>
              <div className="mt-14 flex flex-wrap justify-center gap-6">
                <MagneticButton href="/reservas" className="group rounded-2xl bg-white px-12 py-5 text-lg font-bold text-primary-800 shadow-2xl transition-colors hover:bg-primary-50">
                  <span className="flex items-center gap-3">
                    Reservar mesa
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </MagneticButton>
                <MagneticButton href={`https://wa.me/${BUSINESS.phoneClean}`} className="glass rounded-2xl px-12 py-5 text-lg font-semibold text-white">
                  <span className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp
                  </span>
                </MagneticButton>
              </div>
            </SmoothReveal>
          </Container>
        </div>
      </section>
    </>
  );
}
