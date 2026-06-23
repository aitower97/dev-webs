import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { WhatsAppButton } from "@dev-webs/ui";
import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import { DialsaHeader } from "@/components/DialsaHeader";
import { DialsaFooter } from "@/components/DialsaFooter";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Piscinas y Calefacción en Colmenar Viejo y Sierra Norte de Madrid | Dialsa",
    template: "%s | Dialsa — Piscinas y Calefacción Sierra Norte de Madrid",
  },
  description:
    "Empresa familiar en Colmenar Viejo con servicio en toda la Sierra Norte de Madrid. Piscinas, calefacción, chimeneas, depuradoras, aerotermia y aire acondicionado. ☎ 918 45 17 84",
  keywords: [
    "piscinas Colmenar Viejo",
    "piscinas Sierra Norte Madrid",
    "calefacción Colmenar Viejo",
    "calefacción Sierra Norte Madrid",
    "chimeneas Sierra Norte Madrid",
    "depuradoras piscinas Madrid",
    "aerotermia Colmenar Viejo",
    "aire acondicionado Sierra Norte Madrid",
    "construcción piscinas Sierra Norte",
    "mantenimiento piscinas Colmenar Viejo",
    "fontanería Colmenar Viejo",
    "instalación calderas Sierra Norte Madrid",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS.legalName,
    title: "Piscinas y Calefacción en Colmenar Viejo y Sierra Norte de Madrid | Dialsa",
    description:
      "Empresa familiar en Colmenar Viejo con servicio en toda la Sierra Norte de Madrid. Presupuesto gratis.",
  },
  alternates: {
    canonical: BUSINESS.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <DialsaHeader navItems={NAV_ITEMS} phone={BUSINESS.phone} />
        <main>{children}</main>
        <DialsaFooter navItems={NAV_ITEMS} />
        <WhatsAppButton
          phone={BUSINESS.whatsapp}
          message="Hola, me gustaría pedir información sobre vuestros servicios."
        />
        <CookieBanner />
      </body>
    </html>
  );
}
