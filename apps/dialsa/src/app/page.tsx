import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { LocalBusinessJsonLd } from "@dev-webs/seo";
import { BUSINESS, SERVICES, GALLERY_IMAGES, VIDEOS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { VideoHero } from "@/components/VideoHero";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { VideoShowcase } from "@/components/VideoShowcase";

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

      {/* ===== HERO — Vídeo de fondo ===== */}
      <VideoHero
        videoSrc="/videos/piscina-funcionamiento.mp4"
        posterSrc="/images/piscinas/piscina-piedra-natural.jpg"
      >
        <div className="flex flex-col items-center text-center pt-24 sm:pt-28">
          <div style={{ opacity: 0, animation: "scale-in 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards" }}>
            <Image
              src="/images/logos/logo-azul.png"
              alt="Dialsa - Piscinas y Calefacción"
              width={600}
              height={220}
              className="h-32 w-auto sm:h-40 lg:h-52 brightness-0 invert drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
              priority
            />
          </div>

          <h1 className="mt-10 max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl" style={{ opacity: 0, animation: "text-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards" }}>
            Tu piscina y tu hogar
            <br />
            <span className="bg-gradient-to-r from-primary-300 to-blue-300 bg-clip-text text-transparent">
              en las mejores manos
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/75 sm:text-xl leading-relaxed" style={{ opacity: 0, animation: "text-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards" }}>
            Empresa familiar en Colmenar Viejo con servicio en toda la
            Sierra Norte de Madrid. Piscinas, calefacción, chimeneas y mucho más.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5" style={{ opacity: 0, animation: "text-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards" }}>
            <MagneticButton href="/contacto" className="group rounded-2xl bg-white px-10 py-5 text-lg font-bold text-primary-800 shadow-2xl transition-colors hover:bg-primary-50">
              <span className="flex items-center gap-3">
                Presupuesto Gratis
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </MagneticButton>
            <MagneticButton href={`tel:${BUSINESS.phone}`} className="glass rounded-2xl px-10 py-5 text-lg font-semibold text-white">
              <span className="flex items-center gap-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {BUSINESS.phone}
              </span>
            </MagneticButton>
          </div>

          <div className="relative z-[60] mt-10 mb-20" style={{ animation: "float 3s ease-in-out infinite" }}>
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm font-bold uppercase tracking-widest">Scroll</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
        </div>
      </VideoHero>

      {/* ===== SERVICIOS — Full-screen alternating ===== */}
      {SERVICES.map((service, i) => (
        <section
          key={service.title}
          className={`relative min-h-[80vh] flex items-center overflow-hidden ${
            i % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <SmoothReveal direction={i % 2 === 0 ? "left" : "right"} className="lg:w-[55%]">
                <TiltCard className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </TiltCard>
              </SmoothReveal>

              <SmoothReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.2} className="lg:w-[45%]">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">
                  {String(i + 1).padStart(2, "0")} — Servicio
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  {service.title}
                </h2>
                <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-10">
                  <MagneticButton
                    href="/contacto"
                    className="group rounded-2xl bg-primary-600 px-8 py-4 font-bold text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 hover:shadow-xl"
                  >
                    <span className="flex items-center gap-3">
                      Pedir presupuesto
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </MagneticButton>
                </div>
              </SmoothReveal>
            </div>
          </div>
        </section>
      ))}

      {/* ===== GALERÍA — Scroll horizontal ===== */}
      <section className="py-24 bg-primary-900 overflow-hidden">
        <Container>
          <SmoothReveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">Portfolio</p>
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Nuestros trabajos</h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-400 to-blue-400" />
          </SmoothReveal>
        </Container>
        <div className="mt-12 pl-6 lg:pl-[calc((100vw-80rem)/2+1.5rem)]">
          <HorizontalGallery images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* ===== VÍDEOS — Showcase ===== */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <Container>
          <SmoothReveal>
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">En acción</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Vídeos de nuestros trabajos
              </h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Mira el resultado final de nuestros proyectos. Piscinas, jacuzzis e instalaciones reales.
              </p>
            </div>
          </SmoothReveal>
          <SmoothReveal delay={0.2}>
            <div className="mt-16">
              <VideoShowcase videos={VIDEOS} />
            </div>
          </SmoothReveal>
        </Container>
      </section>

      {/* ===== DIFERENCIADOR ===== */}
      <section className="py-32 bg-white overflow-hidden">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SmoothReveal direction="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">Confianza</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                ¿Por qué
                <br />
                <span className="text-primary-600">Dialsa?</span>
              </h2>
              <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-accent-600 to-accent-400" />
              <p className="mt-8 text-lg text-gray-600 leading-8">
                Somos de Colmenar Viejo y trabajamos en toda la Sierra Norte de Madrid.
                Conocemos la zona, conocemos a nuestros vecinos. Cuando llamas, te cogemos nosotros.
              </p>
              <TiltCard className="mt-10 relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/tienda/tienda-noche-virgen.png"
                    alt="Tienda Dialsa en Colmenar Viejo durante la procesión de la Virgen de los Remedios"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                    <p className="text-sm font-bold text-white/90">Nuestra tienda en la Av. de los Remedios, Colmenar Viejo</p>
                  </div>
                </div>
              </TiltCard>
            </SmoothReveal>

            <SmoothReveal direction="right" delay={0.2}>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Empresa familiar",
                    desc: "Trato directo, sin intermediarios. Tu proyecto lo gestionamos nosotros de principio a fin.",
                  },
                  {
                    num: "02",
                    title: "Presupuesto sin compromiso",
                    desc: "Te visitamos, estudiamos tu caso y te damos un presupuesto detallado. Gratis.",
                  },
                  {
                    num: "03",
                    title: "Servicio integral",
                    desc: "Piscinas, calefacción, chimeneas, depuradoras, gas, fontanería y A/C. Todo en uno.",
                  },
                  {
                    num: "04",
                    title: "Sierra Norte de Madrid",
                    desc: "Colmenar Viejo, Soto del Real, Manzanares, San Agustín de Guadalix y alrededores.",
                  },
                ].map((item, i) => (
                  <SmoothReveal key={item.num} delay={0.3 + i * 0.1}>
                    <div className="group flex gap-6 rounded-2xl p-6 transition-all duration-500 hover:bg-primary-50">
                      <span className="shrink-0 text-4xl font-black text-primary-200 transition-colors group-hover:text-primary-500">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-lg font-extrabold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-gray-500 leading-6">{item.desc}</p>
                      </div>
                    </div>
                  </SmoothReveal>
                ))}
              </div>
            </SmoothReveal>
          </div>
        </Container>
      </section>

      {/* ===== CTA — Full bleed ===== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image src="/images/piscinas/piscina-cesped-artificial.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-900/85" />
        <Container className="relative z-10 text-center">
          <SmoothReveal>
            <Image
              src="/images/logos/logo-azul.png"
              alt="Dialsa"
              width={300}
              height={110}
              className="mx-auto mb-10 h-16 w-auto sm:h-20 brightness-0 invert"
            />
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              ¿Listo para empezar?
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-xl text-white/70">
              Cuéntanos tu proyecto. Presupuesto personalizado sin compromiso.
            </p>
            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <MagneticButton href="/contacto" className="group rounded-2xl bg-white px-12 py-5 text-lg font-bold text-primary-800 shadow-2xl transition-colors hover:bg-primary-50">
                <span className="flex items-center gap-3">
                  Pedir presupuesto
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </MagneticButton>
              <MagneticButton href={`https://wa.me/${BUSINESS.whatsapp}`} className="glass rounded-2xl px-12 py-5 text-lg font-semibold text-white">
                <span className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </span>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </Container>
      </section>

      {/* ===== INSTAGRAM ===== */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <SmoothReveal>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Síguenos</p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 text-2xl font-extrabold text-primary-600 transition-all hover:text-primary-700 hover:gap-4"
            >
              @{BUSINESS.instagram}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </SmoothReveal>
        </Container>
      </section>
    </>
  );
}
