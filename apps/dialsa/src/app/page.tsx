import {
  HeroSection,
  Container,
  SectionHeading,
  CTAButton,
} from "@dev-webs/ui";
import { LocalBusinessJsonLd } from "@dev-webs/seo";
import { BUSINESS, SERVICES } from "@/lib/constants";

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
          email: BUSINESS.email,
          address: BUSINESS.fullAddress,
          geo: BUSINESS.geo,
          openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-14:00"],
        }}
      />

      <HeroSection
        title="Tu hogar merece los mejores profesionales"
        subtitle="Más de 20 años de experiencia en piscinas, riegos, calefacción y aerotermia en Colmenar Viejo y toda la Sierra de Madrid."
        ctaLabel="Pide Presupuesto Gratis"
        ctaHref="/contacto"
        secondaryCtaLabel="Ver Servicios"
        secondaryCtaHref="/servicios"
        backgroundGradient="from-primary-900 via-primary-800 to-primary-700"
      />

      {/* Servicios */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Nuestros Servicios"
            subtitle="Soluciones integrales para tu hogar y comunidad"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-2xl`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600">
                  Más información
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="¿Por qué elegir Dialsa?"
            subtitle="La confianza de cientos de clientes en Colmenar Viejo"
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Experiencia",
                description:
                  "Más de 20 años trabajando en la Sierra de Madrid con cientos de instalaciones realizadas.",
                icon: "🏆",
              },
              {
                title: "Presupuesto sin compromiso",
                description:
                  "Te visitamos, estudiamos tu caso y te damos un presupuesto detallado totalmente gratis.",
                icon: "📋",
              },
              {
                title: "Servicio integral",
                description:
                  "Desde el diseño hasta el mantenimiento. Un solo proveedor para todas tus necesidades.",
                icon: "🔧",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-primary-700 py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Cuéntanos qué necesitas y te preparamos un presupuesto personalizado
            sin compromiso.
          </p>
          <div className="mt-8">
            <CTAButton href="/contacto" variant="primary">
              Contactar ahora
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
