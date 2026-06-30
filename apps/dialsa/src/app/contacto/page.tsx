import type { Metadata } from "next";
import { Container, ContactForm, GoogleMap } from "@dev-webs/ui";
import { BreadcrumbJsonLd } from "@dev-webs/seo";
import { BUSINESS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contacto — Presupuesto de Piscinas en Colmenar Viejo",
  description: `Pide tu presupuesto sin compromiso a Dialsa. Especialistas en piscinas y calefacción en Colmenar Viejo. Tel: ${BUSINESS.phone}. Nos desplazamos a toda la Sierra Norte de Madrid.`,
  alternates: { canonical: `${BUSINESS.url}/contacto` },
};

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: BUSINESS.url },
          { name: "Contacto", url: `${BUSINESS.url}/contacto` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BUSINESS.legalName,
            url: BUSINESS.url,
            telephone: BUSINESS.phone,
            email: "dialsa.gestion@gmail.com",
            address: {
              "@type": "PostalAddress",
              ...BUSINESS.fullAddress,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.latitude,
              longitude: BUSINESS.geo.longitude,
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "14:00" },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: BUSINESS.phone,
              contactType: "customer service",
              availableLanguage: "Spanish",
              areaServed: BUSINESS.areaServed,
            },
          }),
        }}
      />

      <PageHero
        tag="Hablemos"
        title="Contacta con nosotros"
        subtitle="Cuéntanos tu proyecto y te preparamos un presupuesto sin compromiso."
        backgroundImage="/images/piscinas/piscina-piedra-natural.jpg"
      />

      <section className="py-32 bg-white">
        <Container>
          <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2">
            <SmoothReveal direction="left">
              <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
                Envíanos un mensaje
              </h2>
              <ContactForm submitLabel="Enviar solicitud" />
            </SmoothReveal>

            <SmoothReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <TiltCard className="rounded-3xl bg-gray-50 p-8">
                  <h3 className="text-xl font-extrabold text-gray-900">
                    Información de contacto
                  </h3>
                  <dl className="mt-6 space-y-5 text-sm text-gray-600">
                    <div>
                      <dt className="font-bold text-gray-900">Dirección</dt>
                      <dd className="mt-1">{BUSINESS.address}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">Teléfono</dt>
                      <dd className="mt-1">
                        <a href={`tel:${BUSINESS.phone}`} className="text-primary-600 font-semibold hover:underline">
                          {BUSINESS.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">Instagram</dt>
                      <dd className="mt-1">
                        <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline">
                          @{BUSINESS.instagram}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">Horario</dt>
                      <dd className="mt-1">Lunes a Viernes: 9:00 - 19:00<br />Sábados: 10:00 - 14:00</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">Zona de servicio</dt>
                      <dd className="mt-1">{BUSINESS.areaServed}</dd>
                    </div>
                  </dl>
                </TiltCard>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <GoogleMap embedUrl={BUSINESS.googleMapsEmbed} title={`Ubicación de ${BUSINESS.legalName}`} />
                </div>
              </div>
            </SmoothReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
