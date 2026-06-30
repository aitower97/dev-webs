import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { BreadcrumbJsonLd } from "@dev-webs/seo";
import { BUSINESS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";
import { StatsSection } from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Empresa Familiar de Piscinas en Colmenar Viejo",
  description:
    "Más de 20 años construyendo piscinas e instalando calefacción en Colmenar Viejo. Empresa familiar sin intermediarios, con servicio en toda la Sierra Norte de Madrid.",
  alternates: { canonical: `${BUSINESS.url}/sobre-nosotros` },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: BUSINESS.url },
          { name: "Sobre Nosotros", url: `${BUSINESS.url}/sobre-nosotros` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BUSINESS.legalName,
            url: BUSINESS.url,
            logo: `${BUSINESS.url}/images/logos/logo-azul.png`,
            foundingDate: "2000",
            foundingLocation: { "@type": "Place", name: "Colmenar Viejo, Madrid" },
            description: "Empresa familiar fundada en Colmenar Viejo. Más de 20 años de experiencia en construcción y mantenimiento de piscinas, calefacción, chimeneas, depuradoras y aerotermia en la Sierra Norte de Madrid.",
            email: "dialsa.gestion@gmail.com",
            telephone: BUSINESS.phone,
            address: {
              "@type": "PostalAddress",
              ...BUSINESS.fullAddress,
            },
            sameAs: [
              "https://www.google.com/maps/place/Piscinas+y+Calefacci%C3%B3n+Dialsa+S.L/@40.6654546,-3.7722784,17z",
              BUSINESS.instagramUrl,
            ],
          }),
        }}
      />

      <PageHero
        tag="Quiénes somos"
        title="Sobre Nosotros"
        subtitle="Empresa familiar al servicio de Colmenar Viejo y la Sierra Norte."
        backgroundImage="/images/piscinas/piscina-jardin-colmenar.jpg"
      />

      <section className="py-32 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">

            {/* Foto — columna izquierda, sin límite de altura */}
            <SmoothReveal direction="left">
              <TiltCard className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/tienda/tienda-noche-virgen.png"
                    alt="Tienda Dialsa en Colmenar Viejo durante la procesión de la Virgen de los Remedios"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                    <p className="text-sm font-bold text-white/90">Av. de los Remedios, Colmenar Viejo</p>
                  </div>
                </div>
              </TiltCard>
            </SmoothReveal>

            {/* Bullets — misma altura que la foto, distribuidos con justify-between */}
            <SmoothReveal direction="right" delay={0.2} className="flex flex-col justify-between">
              {[
                {
                  num: "01",
                  title: "Empresa familiar desde hace más de 20 años",
                  desc: "Fundada en Colmenar Viejo. Cada proyecto lo gestionamos nosotros de principio a fin, sin intermediarios.",
                },
                {
                  num: "02",
                  title: "Especialistas en piscinas y climatización",
                  desc: "Construcción y mantenimiento de piscinas, calefacción, chimeneas, depuradoras, aerotermia y aire acondicionado.",
                },
                {
                  num: "03",
                  title: "De Colmenar Viejo para la Sierra Norte",
                  desc: "Conocemos la zona y a nuestros vecinos. Colmenar, Soto del Real, Manzanares, San Agustín y alrededores.",
                },
                {
                  num: "04",
                  title: "Presupuesto siempre sin compromiso",
                  desc: "Te visitamos, estudiamos tu caso y te damos un presupuesto detallado. Sin letra pequeña, sin sorpresas.",
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
            </SmoothReveal>

          </div>
        </Container>
      </section>

      {/* Números — igual que en el inicio */}
      <StatsSection />

      <section className="py-20 bg-white">
        <Container>
          <SmoothReveal delay={0.2}>
            <div className="text-center">
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
