import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { LocalBusinessJsonLd } from "@dev-webs/seo";
import { BUSINESS, MENU_DEL_DIA, OFERTAS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { SteamEffect } from "@/components/SteamEffect";
import { SectionDivider } from "@/components/SectionDivider";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
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

            <div className="mt-6" style={{ opacity: 0, animation: "scale-in 0.8s ease-out 0.7s forwards" }}>
              <SectionDivider variant="cutlery" />
            </div>

            <p className="mt-4 text-lg text-white/60 uppercase tracking-[0.3em] font-semibold" style={{ opacity: 0, animation: "text-reveal 1s ease-out 0.8s forwards" }}>
              Bar Restaurante
            </p>

            <p className="mt-6 max-w-xl text-xl text-white/80 leading-relaxed" style={{ opacity: 0, animation: "text-reveal 1s ease-out 1s forwards" }}>
              Cocina casera, tapas y el mejor plan after work en Las Tablas, Madrid.
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
                <span>Ver Carta</span>
              </MagneticButton>
            </div>

            <div className="relative z-[60] mt-10" style={{ animation: "float 3s ease-in-out infinite" }}>
              <div className="flex flex-col items-center gap-2 text-white/40">
                <span className="text-sm font-bold uppercase tracking-widest">Scroll</span>
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* MENÚ DEL DÍA */}
      <section className="pb-24 pt-8 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-4 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">Cada día</p>
              <h2 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">Menú del Día</h2>
              <p className="mt-4 text-3xl font-black text-primary-600">{MENU_DEL_DIA.price}</p>
              <p className="mt-1 text-gray-500">{MENU_DEL_DIA.includes}</p>
              <div className="mt-6"><SectionDivider variant="line" /></div>
            </div>
          </SmoothReveal>

          <div className="mx-auto mt-12 max-w-4xl grid gap-8 sm:grid-cols-3">
            {[
              { title: "Primeros", items: MENU_DEL_DIA.primeros, icon: "M12 3v18m-6-6h12" },
              { title: "Segundos", items: MENU_DEL_DIA.segundos, icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048" },
              { title: "Postres", items: MENU_DEL_DIA.postres, icon: "M21 15.999A8.165 8.165 0 0012 21a8.165 8.165 0 00-9-5.001M12 3a8.165 8.165 0 019 5.001" },
            ].map((section, i) => (
              <SmoothReveal key={section.title} delay={i * 0.15}>
                <TiltCard className="cursor-default h-full rounded-3xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-extrabold uppercase tracking-wider text-primary-700">{section.title}</h3>
                  </div>
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
      </section>

      {/* OFERTAS */}
      <section className="relative py-24 bg-primary-900">
        <Container className="relative z-10">
          <SmoothReveal>
            <div className="mb-16 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-400">No te lo pierdas</p>
              <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Ofertas y Promos</h2>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/50" />
                <svg className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/50" />
              </div>
            </div>
          </SmoothReveal>

          <div className="grid gap-8 sm:grid-cols-3">
            {OFERTAS.map((oferta, i) => {
              const icons = [
                <svg key="cocktail" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M12 12v9m-3 0h6" /></svg>,
                <svg key="beer" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h12a2 2 0 012 2v8a2 2 0 01-2 2H4V7zm12 0h3a2 2 0 012 2v4a2 2 0 01-2 2h-3M7 7V4m4 3V4" /></svg>,
                <svg key="cheers" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 3l2 18M16 3l2 18M4 8h6m4 0h6M5 13h4m6 0h4" /></svg>,
              ];

              return (
                <SmoothReveal key={oferta.title} delay={i * 0.15}>
                  <TiltCard className="cursor-default h-full rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm ring-1 ring-white/10 transition-all hover:bg-white/20 hover:shadow-xl hover:ring-accent-400/30">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500/20 text-accent-400">
                      {icons[i]}
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-white">{oferta.title}</h3>
                    <p className="mt-1 text-sm font-bold text-accent-400">{oferta.subtitle}</p>
                    <p className="mt-4 text-sm text-white/70 leading-6">{oferta.description}</p>
                  </TiltCard>
                </SmoothReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="py-24 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-4 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">¿Por qué Las Dos Terrazas?</h2>
              <div className="mt-6"><SectionDivider variant="cutlery" /></div>
            </div>
          </SmoothReveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              { title: "Cocina casera", desc: "Productos frescos cada mañana. Recetas de siempre con el cariño de un bar de barrio.", icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.963-6.386z" },
              { title: "A 5 min de tu oficina", desc: "En pleno corazón de Las Tablas, junto a las principales oficinas de la zona.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
              { title: "Dos terrazas", desc: "El mejor sitio para comer o tomar algo al aire libre en la zona.", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
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
      <section className="relative bg-primary-900 py-24">
        <Container className="relative z-10 text-center">
          <SmoothReveal>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">¿Vienes a comer?</h2>
            <p className="mx-auto mt-8 max-w-xl text-xl text-white/70">Reserva tu mesa o ven directamente. Te esperamos.</p>
            <div className="mt-6"><SectionDivider variant="dots" /></div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
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
      </section>
    </>
  );
}
