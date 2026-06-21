import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@dev-webs/ui";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce Dialsa, empresa especializada en piscinas, riegos, calefacción y aerotermia en Colmenar Viejo desde hace más de 20 años.",
};

export default function SobreNosotrosPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Sobre Nosotros"
          subtitle="Más de 20 años al servicio de Colmenar Viejo y la Sierra de Madrid"
        />
        <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-8">
          <p>
            En <strong className="text-gray-900">Dialsa</strong> llevamos más de
            dos décadas ofreciendo soluciones integrales en instalación y
            mantenimiento de piscinas, sistemas de riego, calefacción y
            aerotermia para hogares, comunidades y empresas de la Sierra de
            Madrid.
          </p>
          <p>
            Nuestro equipo de profesionales cualificados trabaja con los mejores
            materiales y las últimas tecnologías para garantizar instalaciones
            eficientes, duraderas y adaptadas a las necesidades de cada cliente.
          </p>
          <p>
            Nos avalan cientos de proyectos realizados, la confianza de nuestros
            clientes y un compromiso firme con la calidad del servicio y la
            atención personalizada.
          </p>

          <div className="grid gap-8 sm:grid-cols-3 pt-8">
            {[
              { number: "+500", label: "Proyectos realizados" },
              { number: "+20", label: "Años de experiencia" },
              { number: "100%", label: "Clientes satisfechos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-primary-50 p-6 text-center"
              >
                <p className="text-3xl font-black text-primary-600">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <CTAButton href="/contacto" variant="primary">
              Contactar con nosotros
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
