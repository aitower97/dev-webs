import type { Metadata } from "next";
import { Container, ContactForm, GoogleMap } from "@dev-webs/ui";
import { BUSINESS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${BUSINESS.name}. Tel: ${BUSINESS.phone}.`,
};

export default function ContactoPage() {
  return (
    <>
      <PageHero tag="Hablemos" title="Contacto" subtitle="Llámanos, escríbenos o ven directamente." backgroundImage="/images/coffee.jpg" />

      <section className="py-32 bg-white">
        <Container>
          <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2">
            <SmoothReveal direction="left">
              <h2 className="mb-8 text-3xl font-extrabold text-gray-900">Envíanos un mensaje</h2>
              <ContactForm submitLabel="Enviar mensaje" />
            </SmoothReveal>
            <SmoothReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <TiltCard className="rounded-3xl bg-gray-50 p-8">
                  <h3 className="text-xl font-extrabold text-gray-900">Información de contacto</h3>
                  <dl className="mt-6 space-y-5 text-sm text-gray-600">
                    <div><dt className="font-bold text-gray-900">Dirección</dt><dd className="mt-1">{BUSINESS.address}</dd></div>
                    <div><dt className="font-bold text-gray-900">Teléfono</dt><dd className="mt-1"><a href={`tel:${BUSINESS.phoneClean}`} className="text-primary-600 font-semibold hover:underline">{BUSINESS.phone}</a></dd></div>
                    <div><dt className="font-bold text-gray-900">Instagram</dt><dd className="mt-1"><a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline">@{BUSINESS.instagram}</a></dd></div>
                    <div><dt className="font-bold text-gray-900">Horario</dt><dd className="mt-1">{BUSINESS.hours.weekdays}<br />{BUSINESS.hours.saturday}<br />{BUSINESS.hours.sunday}</dd></div>
                  </dl>
                </TiltCard>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <GoogleMap embedUrl={BUSINESS.googleMapsEmbed} title="Las Dos Terrazas" />
                </div>
              </div>
            </SmoothReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
