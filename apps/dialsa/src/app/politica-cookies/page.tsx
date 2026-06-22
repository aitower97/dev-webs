import type { Metadata } from "next";
import { Container } from "@dev-webs/ui";

export const metadata: Metadata = {
  title: "Política de Cookies",
  robots: { index: false, follow: false },
};

export default function PoliticaCookiesPage() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl prose prose-gray">
          <h1 className="text-3xl font-extrabold text-gray-900">Política de Cookies</h1>

          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar una web. Se utilizan para mejorar la experiencia de navegación.
          </p>

          <h2>Cookies que utilizamos</h2>
          <ul>
            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la web. No requieren consentimiento.</li>
            <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo se usa la web (Vercel Analytics). Son anónimas.</li>
          </ul>

          <h2>Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador para rechazar cookies o eliminar las existentes. Ten en cuenta que esto puede afectar a la funcionalidad de la web.
          </p>

          <h2>Más información</h2>
          <p>
            Para más información sobre cookies, visita{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
