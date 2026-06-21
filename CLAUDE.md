# CLAUDE.md

## Project Overview

Monorepo with 2 Next.js 15 websites for local businesses in Madrid, Spain:
- **Dialsa** (`apps/dialsa`) — Pool, irrigation, heating & aerothermal services in Colmenar Viejo
- **Domino** (`apps/domino`) — Restaurant in Las Tablas (daily menus, afternoon offers)

## Development Commands

```bash
npm run dev              # Start both dev servers
npm run dev:dialsa       # Dialsa only (port 3001)
npm run dev:domino       # Domino only (port 3002)
npm run build            # Build both apps
npm run typecheck        # TypeScript check all packages
npm run lint             # Lint all packages
```

## Architecture

- **Monorepo**: Turborepo + npm workspaces
- **Framework**: Next.js 15 (App Router, SSG)
- **Styling**: Tailwind CSS v4 with per-app `@theme` colors
- **Shared packages**: `packages/ui` (components), `packages/seo` (JSON-LD, metadata), `packages/config` (tsconfig)
- **Hosting**: Vercel (auto-deploy from GitHub)

### Shared UI Components

All shared components barrel-exported from `packages/ui/src/index.ts`. Import as:
```ts
import { Header, Footer, CTAButton } from "@dev-webs/ui";
```

Brand colors use semantic tokens (`primary-*`, `accent-*`) defined per-app in `globals.css` via Tailwind `@theme`.

### SEO

JSON-LD structured data via `packages/seo`. Import as:
```ts
import { LocalBusinessJsonLd, createMetadata } from "@dev-webs/seo";
```

## Git Branching

- `main` — production (auto-deploys to Vercel)
- `develop` — integration
- `feature/*` — feature branches → PR to develop

## Language

UI text in **Spanish**. Code/variables in English.
