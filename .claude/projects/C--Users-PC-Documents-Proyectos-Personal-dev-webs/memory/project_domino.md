---
name: project-domino
description: Estado actual de Las Dos Terrazas (apps/domino) — restaurante en Las Tablas, build fallando en Vercel
metadata:
  type: project
---

**Las Dos Terrazas** — Restaurante en Las Tablas, Madrid.
- Dirección: C/ Isabel Colbrand 10, Las Tablas
- Teléfono: 615 925 089
- Paleta de colores: rojo/dorado
- Tiene formulario de reservas

**Build en Vercel fallando (a 2026-06-23):**
- Probar config: Root Directory vacío, Build Command `npx turbo build --filter=@dev-webs/domino`, Output Directory `apps/domino/.next`

**Pendiente:**
- Arreglar deploy en Vercel
- SEO (sitemap, robots, JSON-LD, Search Console)
- Páginas legales (RGPD, aviso legal, cookies)
- Dominio propio (aún sin comprar/asignar)

**Why:** Segunda web del monorepo, aún no en producción.
**How to apply:** El nombre interno en el repo es "domino" pero el negocio se llama "Las Dos Terrazas". Hay que resolver el build de Vercel antes de avanzar con SEO/legal. Ver [[project-dialsa]] como referencia de lo ya hecho.
