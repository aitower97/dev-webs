import type { Metadata } from "next";
import { Header, Footer, WhatsAppButton } from "@dev-webs/ui";
import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Restaurante en Las Tablas, Madrid`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Header
          businessName={BUSINESS.name}
          navItems={NAV_ITEMS}
          phone={BUSINESS.phone}
          ctaLabel="Reservar Mesa"
          ctaHref="/contacto"
        />
        <main>{children}</main>
        <Footer
          businessName={BUSINESS.name}
          address={BUSINESS.address}
          phone={BUSINESS.phone}
          email={BUSINESS.email}
          navItems={NAV_ITEMS}
        />
        <WhatsAppButton
          phone={BUSINESS.phoneClean}
          message="Hola, me gustaría hacer una reserva."
        />
      </body>
    </html>
  );
}
