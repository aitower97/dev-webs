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
    default: "Piscinas y Calefacción en Colmenar Viejo | Dialsa",
    template: "%s | Dialsa — Piscinas y Calefacción Colmenar Viejo",
  },
  description:
    "Empresa de piscinas, calefacción, chimeneas, depuradoras y fontanería en Colmenar Viejo y Sierra Norte de Madrid. Presupuesto sin compromiso. ☎ 918 45 17 84",
  keywords: [
    "piscinas Colmenar Viejo",
    "calefacción Colmenar Viejo",
    "chimeneas Sierra Norte Madrid",
    "depuradoras piscinas Madrid",
    "fontanería Colmenar Viejo",
    "aire acondicionado Colmenar Viejo",
    "construcción piscinas Madrid",
    "mantenimiento piscinas",
    "instalación calderas Colmenar Viejo",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS.legalName,
    title: "Piscinas y Calefacción en Colmenar Viejo | Dialsa",
    description:
      "Empresa familiar de piscinas, calefacción y fontanería en Colmenar Viejo. Presupuesto gratis.",
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
          phone={BUSINESS.phoneClean}
          message="Hola, me gustaría pedir información sobre vuestros servicios."
        />
        <CookieBanner />
      </body>
    </html>
  );
}
