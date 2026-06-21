import type { Metadata } from "next";
import { Container, SectionHeading, ContactForm, GoogleMap } from "@dev-webs/ui";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Dialsa en Colmenar Viejo. Pide presupuesto sin compromiso para piscinas, riegos, calefacción y aerotermia.",
};

export default function ContactoPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Contacta con nosotros"
          subtitle="Cuéntanos tu proyecto y te preparamos un presupuesto sin compromiso"
        />
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm submitLabel="Enviar solicitud" />
          </div>
          <div className="space-y-8">
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-900">
                Información de contacto
              </h3>
              <dl className="mt-4 space-y-4 text-sm text-gray-600">
                <div>
                  <dt className="font-semibold text-gray-900">Dirección</dt>
                  <dd>{BUSINESS.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Teléfono</dt>
                  <dd>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="text-primary-600 hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Horario</dt>
                  <dd>
                    Lunes a Viernes: 9:00 - 19:00
                    <br />
                    Sábados: 10:00 - 14:00
                  </dd>
                </div>
              </dl>
            </div>
            <GoogleMap
              embedUrl={BUSINESS.googleMapsEmbed}
              title="Ubicación de Dialsa en Colmenar Viejo"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
