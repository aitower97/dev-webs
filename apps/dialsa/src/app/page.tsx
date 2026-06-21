import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { LocalBusinessJsonLd } from "@dev-webs/seo";
import { BUSINESS, SERVICES, GALLERY_IMAGES } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { WaterSplash } from "@/components/WaterSplash";
import { CountUp } from "@/components/CountUp";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd
        data={{
          type: "LocalBusiness",
          name: BUSINESS.legalName,
          description: BUSINESS.description,
          url: BUSINESS.url,
          telephone: BUSINESS.phone,
          address: BUSINESS.fullAddress,
          geo: BUSINESS.geo,
          openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-14:00"],
        }}
      />

      {/* ===== HERO — Logo gigante protagonista ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/hero-pool.jpg"
          alt="Piscina construida por Dialsa"
          fill
          className="object-cover"
          priority
          style={{ animation: "slow-zoom 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/90" />
        <WaterSplash />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center pt-24 sm:pt-28">
            {/* LOGO GRANDE — protagonista absoluto, debajo del header */}
            <div
              style={{
                opacity: 0,
                animation: "scale-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
              }}
            >
              <Image
                src="/images/logo-azul.png"
                alt="Dialsa - Piscinas y Calefacción"
                width={600}
                height={220}
                className="h-32 w-auto sm:h-40 lg:h-52 brightness-0 invert drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
                priority
              />
            </div>

            <h1
              className="mt-10 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{
                opacity: 0,
                animation: "text-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards",
              }}
            >
              Tu piscina y tu hogar
              <br />
              <span className="bg-gradient-to-r from-primary-300 to-blue-300 bg-clip-text text-transparent">
                en las mejores manos
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg text-white/75 sm:text-xl leading-relaxed"
              style={{
                opacity: 0,
                animation: "text-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards",
              }}
            >
              Empresa familiar en Colmenar Viejo. Piscinas, calefacción,
              chimeneas, fontanería y mucho más.
            </p>

            <div
              className="mt-12 flex flex-wrap justify-center gap-5"
              style={{
                opacity: 0,
                animation: "text-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards",
              }}
            >
              <MagneticButton
                href="/contacto"
                className="group rounded-2xl bg-white px-10 py-5 text-lg font-bold text-primary-800 shadow-2xl transition-colors hover:bg-primary-50"
              >
                <span className="flex items-center gap-3">
                  Presupuesto Gratis
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>

              <MagneticButton
                href={`tel:${BUSINESS.phone}`}
                className="glass rounded-2xl px-10 py-5 text-lg font-semibold text-white"
              >
                <span className="flex items-center gap-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {BUSINESS.phone}
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2" style={{ animation: "float 3s ease-in-out infinite" }}>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Wave transition al siguiente sección — orgánico, no recto */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full" style={{ height: "80px", display: "block" }}>
            <path fill="white" d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="relative pb-32 pt-16 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-20 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">
                Lo que hacemos
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Nuestros Servicios
              </h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
            </div>
          </SmoothReveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <SmoothReveal
                key={service.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.12}
              >
                <TiltCard>
                  <a
                    href={service.href}
                    className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-100"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent transition-all duration-500 group-hover:from-primary-900/80" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                          {service.title}
                        </h3>
                        <div className="mt-2 h-1 w-0 rounded-full bg-white transition-all duration-500 group-hover:w-20" />
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-600 leading-7">{service.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-primary-600 font-bold">
                        <span className="transition-all group-hover:mr-2">Más información</span>
                        <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </Container>

        {/* Wave orgánica hacia la siguiente sección */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: "60px", display: "block" }}>
            <path className="fill-primary-900" d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,30 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* ===== NÚMEROS — con wave ===== */}
      <section className="relative overflow-hidden py-24 bg-primary-900">
        <WaterSplash />
        <Container className="relative z-10">
          <div className="grid gap-12 sm:grid-cols-4 text-center">
            {[
              { end: 500, suffix: "+", label: "Proyectos" },
              { end: 100, suffix: "%", label: "Satisfacción" },
              { end: 15, suffix: "+", label: "Municipios" },
              { end: 365, suffix: "", label: "Días de servicio" },
            ].map((stat, i) => (
              <SmoothReveal key={stat.label} delay={i * 0.15}>
                <p className="text-5xl font-black text-white lg:text-6xl">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-widest text-primary-300">
                  {stat.label}
                </p>
              </SmoothReveal>
            ))}
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: "60px", display: "block" }}>
            <path fill="#f9fafb" d="M0,60 C240,20 480,90 720,50 C960,10 1200,80 1440,40 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* ===== GALERÍA ===== */}
      <section className="pt-16 pb-32 bg-gray-50">
        <Container>
          <SmoothReveal>
            <div className="mb-20 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">Portfolio</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Nuestros Trabajos
              </h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
            </div>
          </SmoothReveal>

          <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((img, i) => (
              <SmoothReveal key={img.src} delay={i * 0.1}>
                <TiltCard className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-md">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-all duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary-900/0 transition-all duration-500 group-hover:bg-primary-900/60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.3}>
            <div className="mt-14 text-center">
              <MagneticButton
                href="/galeria"
                className="group rounded-2xl border-2 border-primary-600 px-10 py-4 font-bold text-primary-600 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  Ver toda la galería
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </Container>

        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: "60px", display: "block" }}>
            <path fill="white" d="M0,50 C360,90 720,10 1080,60 C1260,80 1380,20 1440,40 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* ===== POR QUÉ DIALSA ===== */}
      <section className="py-32 bg-white">
        <Container>
          <SmoothReveal>
            <div className="mb-20 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">Confianza</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                ¿Por qué Dialsa?
              </h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-accent-600 to-accent-400" />
            </div>
          </SmoothReveal>

          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { title: "Empresa familiar", desc: "Somos de Colmenar Viejo. Conocemos la zona, conocemos a nuestros clientes y trabajamos con la cercanía de siempre.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { title: "Presupuesto gratis", desc: "Te visitamos, estudiamos tu caso y te damos un presupuesto detallado. Sin compromiso, sin letra pequeña.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { title: "Servicio integral", desc: "Piscinas, calefacción, chimeneas, riego, gas, fontanería y aire acondicionado. Todo en un solo proveedor.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            ].map((item, i) => (
              <SmoothReveal key={item.title} delay={i * 0.15}>
                <TiltCard className="group h-full cursor-default rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition-all duration-500 hover:border-primary-200 hover:shadow-2xl">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary-600/20">
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

      {/* ===== CTA FINAL ===== */}
      <section className="relative overflow-hidden">
        <div style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: "60px", display: "block" }}>
            <path className="fill-primary-900" d="M0,40 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>
        <div className="relative bg-primary-900 pb-32 pt-16">
          <WaterSplash />
          <Container className="relative z-10 text-center">
            <SmoothReveal>
              <Image
                src="/images/logo-azul.png"
                alt="Dialsa - Piscinas y Calefacción"
                width={300}
                height={110}
                className="mx-auto mb-10 h-20 w-auto sm:h-24 brightness-0 invert"
              />
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                ¿Listo para empezar?
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-xl text-white/70 leading-relaxed">
                Cuéntanos tu proyecto. Presupuesto personalizado sin compromiso.
              </p>
              <div className="mt-14 flex flex-wrap justify-center gap-6">
                <MagneticButton
                  href="/contacto"
                  className="group rounded-2xl bg-white px-12 py-5 text-lg font-bold text-primary-800 shadow-2xl transition-colors hover:bg-primary-50"
                >
                  <span className="flex items-center gap-3">
                    Pedir presupuesto
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </MagneticButton>
                <MagneticButton
                  href={`https://wa.me/${BUSINESS.phoneClean}`}
                  className="glass rounded-2xl px-12 py-5 text-lg font-semibold text-white"
                >
                  <span className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
