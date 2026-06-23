---
name: project-dialsa
description: Estado actual de Dialsa (apps/dialsa) — web de piscinas y calefacción desplegada en dialsapyc.es
metadata:
  type: project
---

**Dialsa** — Piscinas y Calefacción Dialsa S.L., Colmenar Viejo, Madrid.
- Dominio: dialsapyc.es (desplegada en Vercel)
- Teléfono oficina: 918 45 17 84
- WhatsApp: 624 43 25 08 (número diferente al de oficina)
- Formulario de contacto: Gmail SMTP (arrocham97@gmail.com temporal, pendiente migrar a dialsapyc@hotmail.com)
- Competidor: dialsapyc.com (WordPress genérico)
- Servicios: Piscinas, Calefacción/Chimeneas, Depuradoras, A/C Aerotermias Calderas Termos

**Completado:**
- SEO (sitemap, robots.txt, JSON-LD, Search Console verificado)
- Legal / RGPD (política de privacidad, aviso legal, cookies)
- Fotos reales organizadas por categoría + vídeos
- Video hero, galería con tabs/lightbox, video showcase
- Favicon (D con ola de agua)
- Mensaje "Colmenar Viejo + Sierra Norte de Madrid" reforzado

**Pendiente:**
- Google Business Profile (solicitud enviada 2026-06-22, acceso esperado 2026-06-25, ficha antigua era de Hidrosierra)
- Migrar email a dialsapyc@hotmail.com (falta contraseña de aplicación, teléfono vinculado a antiguo empleado)

**Why:** Es el negocio principal del cliente, ya en producción.
**How to apply:** Tailwind v4 no soporta `max-w-screen-*` ni genera bien valores arbitrarios tipo `max-w-[90rem]` en producción — usar `max-w-[92vw]` o clases CSS directas en globals.css. Priorizar SEO y rendimiento.
