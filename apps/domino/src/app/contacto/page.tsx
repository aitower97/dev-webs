import type { Metadata } from "next";
import { Container, SectionHeading, ContactForm, GoogleMap } from "@dev-webs/ui";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Reserva mesa en Restaurante Dominó en Las Tablas, Madrid. Llámanos o envíanos un mensaje.",
};

export default function ContactoPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Reserva tu mesa"
          subtitle="Llámanos, escríbenos por WhatsApp o rellena el formulario"
        />
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm submitLabel="Enviar reserva" />
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
                    Comidas: 12:00 - 16:00
                    <br />
                    Tardes: 17:00 - 23:00
                    <br />
                    Sábados y Domingos: Cerrado
                  </dd>
                </div>
              </dl>
            </div>
            <GoogleMap
              embedUrl={BUSINESS.googleMapsEmbed}
              title="Ubicación de Restaurante Dominó en Las Tablas"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
