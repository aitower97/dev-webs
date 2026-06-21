import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@dev-webs/ui";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { SmoothReveal } from "@/components/SmoothReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Piscinas, calefacción, chimeneas, riego, gas, fontanería y aire acondicionado en ${BUSINESS.shortAddress}.`,
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        tag="Lo que hacemos"
        title="Nuestros Servicios"
        subtitle="Soluciones profesionales para tu hogar y comunidad en la Sierra Norte de Madrid."
        backgroundImage="/images/pool-luxury.jpg"
      />

      <section className="py-32 bg-white">
        <Container>
          <div className="space-y-32">
            {SERVICES.map((service, i) => (
              <SmoothReveal key={service.title} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  id={service.href.split("#")[1]}
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <TiltCard className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl lg:w-1/2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </TiltCard>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h2>
                    <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
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
                  </div>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
