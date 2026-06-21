import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@dev-webs/ui";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Piscinas, riegos, calefacción y aerotermia en Colmenar Viejo. Instalación, mantenimiento y reparación.",
};

export default function ServiciosPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Nuestros Servicios"
          subtitle="Soluciones profesionales para tu hogar y comunidad en la Sierra de Madrid"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-3xl`}
              >
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600">
                Ver más
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
        <div className="mt-16 text-center">
          <CTAButton href="/contacto" variant="primary">
            Pide presupuesto sin compromiso
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
