import {
  HeroSection,
  Container,
  SectionHeading,
  CTAButton,
} from "@dev-webs/ui";
import { LocalBusinessJsonLd } from "@dev-webs/seo";
import { BUSINESS, MENU_DEL_DIA, OFERTAS_TARDE } from "@/lib/constants";

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
          email: BUSINESS.email,
          address: BUSINESS.fullAddress,
          geo: BUSINESS.geo,
          openingHours: ["Mo-Fr 12:00-16:00", "Mo-Fr 17:00-23:00"],
          servesCuisine: ["Española", "Casera", "Mediterránea"],
          priceRange: "€€",
        }}
      />

      <HeroSection
        title="Cocina casera en el corazón de Las Tablas"
        subtitle="Menús del día a precio de oficina, hechos con productos frescos cada mañana. Y por la tarde, el mejor plan after work de la zona."
        ctaLabel="Ver Carta"
        ctaHref="/carta"
        secondaryCtaLabel="Reservar Mesa"
        secondaryCtaHref="/contacto"
        backgroundGradient="from-primary-900 via-primary-800 to-primary-700"
      />

      {/* Menú del día */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Menú del Día"
            subtitle={`Todo incluido por ${MENU_DEL_DIA.price} — ${MENU_DEL_DIA.includes}`}
          />
          <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="mb-4 text-lg font-bold text-primary-700 uppercase tracking-wider">
                Primeros
              </h3>
              <ul className="space-y-3">
                {MENU_DEL_DIA.primeros.map((plato) => (
                  <li
                    key={plato}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    {plato}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h3 className="mb-4 text-lg font-bold text-primary-700 uppercase tracking-wider">
                Segundos
              </h3>
              <ul className="space-y-3">
                {MENU_DEL_DIA.segundos.map((plato) => (
                  <li
                    key={plato}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent-500 shrink-0" />
                    {plato}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/carta" variant="primary">
              Ver carta completa
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Ofertas de tarde */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Ofertas de Tarde"
            subtitle="El mejor plan after work en Las Tablas"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {OFERTAS_TARDE.map((oferta) => (
              <div
                key={oferta.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-primary-100 bg-white p-8 text-center transition-all duration-300 hover:border-primary-300 hover:shadow-lg"
              >
                <p className="text-4xl font-black text-primary-600">
                  {oferta.price}
                </p>
                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  {oferta.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {oferta.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ubicación + CTA */}
      <section className="bg-primary-700 py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Estamos en Las Tablas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            A 5 minutos andando de las principales oficinas de la zona.
            Ven a conocernos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contacto" variant="primary">
              Reservar mesa
            </CTAButton>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Llamar: {BUSINESS.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
