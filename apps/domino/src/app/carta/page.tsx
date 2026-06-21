import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@dev-webs/ui";
import { MENU_DEL_DIA, OFERTAS_TARDE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "Carta del Restaurante Dominó en Las Tablas. Menú del día casero y ofertas de tarde para after work.",
};

export default function CartaPage() {
  return (
    <>
      {/* Menú del día */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Menú del Día"
            subtitle={`${MENU_DEL_DIA.price} — ${MENU_DEL_DIA.includes}`}
          />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-primary-700 uppercase tracking-wider">
                  Postres
                </h3>
                <ul className="space-y-3">
                  {MENU_DEL_DIA.postres.map((postre) => (
                    <li
                      key={postre}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                      {postre}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ofertas de tarde */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Ofertas de Tarde"
            subtitle="De lunes a viernes, el mejor after work de Las Tablas"
          />
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-3">
            {OFERTAS_TARDE.map((oferta) => (
              <div
                key={oferta.title}
                className="rounded-2xl border-2 border-primary-100 bg-white p-8 text-center transition-all hover:border-primary-300 hover:shadow-lg"
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
          <div className="mt-12 text-center">
            <CTAButton href="/contacto" variant="primary">
              Reservar mesa
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
