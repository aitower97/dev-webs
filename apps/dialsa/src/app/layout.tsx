import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { WhatsAppButton } from "@dev-webs/ui";
import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import { DialsaHeader } from "@/components/DialsaHeader";
import { DialsaFooter } from "@/components/DialsaFooter";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Piscinas, Calefacción y Fontanería en Colmenar Viejo`,
    template: `%s | ${BUSINESS.name} — Piscinas y Calefacción`,
  },
  description: BUSINESS.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS.legalName,
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
      </body>
    </html>
  );
}
