import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";

export const metadata: Metadata = {
  title: "Aviso Legal",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl prose prose-gray">
          <h1 className="text-3xl font-extrabold text-gray-900">Aviso Legal</h1>

          <h2>Datos identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa:
          </p>
          <ul>
            <li><strong>Titular:</strong> Piscinas y Calefacción Dialsa S.L.</li>
            <li><strong>Domicilio:</strong> Avenida de Los Remedios, 6, 28770 Colmenar Viejo, Madrid</li>
            <li><strong>Teléfono:</strong> 918 45 17 84</li>
            <li><strong>Actividad:</strong> Instalación y mantenimiento de piscinas, calefacción, fontanería y aire acondicionado</li>
          </ul>

          <h2>Propiedad intelectual</h2>
          <p>
            Todos los contenidos de esta web (textos, imágenes, logotipos, diseño) son propiedad de Piscinas y Calefacción Dialsa S.L. o de sus legítimos propietarios. Queda prohibida su reproducción sin autorización expresa.
          </p>

          <h2>Limitación de responsabilidad</h2>
          <p>
            Dialsa no se hace responsable de los daños que pudieran derivarse del uso de esta web. Los enlaces a terceros se proporcionan únicamente con fines informativos.
          </p>

          <h2>Legislación aplicable</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, serán competentes los Juzgados y Tribunales de Madrid.
          </p>
        </div>
      </Container>
    </section>
  );
}
