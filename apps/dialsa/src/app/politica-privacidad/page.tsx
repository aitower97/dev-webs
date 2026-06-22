import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl prose prose-gray">
          <h1 className="text-3xl font-extrabold text-gray-900">Política de Privacidad</h1>

          <h2>Responsable del tratamiento</h2>
          <ul>
            <li><strong>Responsable:</strong> Piscinas y Calefacción Dialsa S.L.</li>
            <li><strong>Dirección:</strong> Avenida de Los Remedios, 6, 28770 Colmenar Viejo, Madrid</li>
            <li><strong>Teléfono:</strong> 918 45 17 84</li>
          </ul>

          <h2>Datos que recogemos</h2>
          <p>
            A través del formulario de contacto recogemos: nombre, email, teléfono (opcional) y mensaje. Estos datos se utilizan exclusivamente para atender tu solicitud.
          </p>

          <h2>Finalidad del tratamiento</h2>
          <ul>
            <li>Responder a solicitudes de presupuesto e información.</li>
            <li>Gestionar la relación comercial derivada.</li>
          </ul>

          <h2>Base legal</h2>
          <p>
            El consentimiento del interesado al enviar el formulario de contacto, conforme al artículo 6.1.a) del RGPD (UE) 2016/679.
          </p>

          <h2>Conservación de datos</h2>
          <p>
            Los datos se conservarán mientras sea necesario para atender la solicitud y, posteriormente, durante el plazo legalmente establecido.
          </p>

          <h2>Derechos del interesado</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición contactando con nosotros por teléfono o email.
          </p>

          <h2>Seguridad</h2>
          <p>
            Aplicamos las medidas técnicas y organizativas adecuadas para proteger tus datos personales.
          </p>
        </div>
      </Container>
    </section>
  );
}
