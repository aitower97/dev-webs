import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@dev-webs/ui";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce Restaurante Dominó en Las Tablas, Madrid. Cocina casera, menús del día y el mejor ambiente after work.",
};

export default function SobreNosotrosPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Sobre Nosotros"
          subtitle="Cocina casera en el corazón de Las Tablas"
        />
        <div className="mx-auto max-w-3xl space-y-8 text-gray-600 leading-8">
          <p>
            <strong className="text-gray-900">Dominó</strong> nació con una idea
            clara: ofrecer comida casera de calidad a precio justo para los
            trabajadores de la zona de Las Tablas.
          </p>
          <p>
            Cada mañana nuestro equipo de cocina prepara menús del día con
            productos frescos, recetas tradicionales y el cariño de siempre. Por
            las tardes, nos transformamos en el punto de encuentro perfecto para
            tomar algo después del trabajo con nuestras ofertas de cañas, tapas y
            raciones.
          </p>
          <p>
            Estamos a 5 minutos andando de las principales oficinas de la zona,
            con un ambiente acogedor y un servicio rápido para que aproveches tu
            hora de comida.
          </p>

          <div className="grid gap-8 sm:grid-cols-3 pt-8">
            {[
              { number: "12,50€", label: "Menú completo" },
              { number: "5 min", label: "De las oficinas" },
              { number: "100%", label: "Producto fresco" },
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
              Reservar mesa
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
