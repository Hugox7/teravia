# Teravia — socle monorepo

Nom provisoire, modifiable à tout moment.

## Pré-requis
- Node.js 20.9+ (idéalement une version LTS récente)
- pnpm 10 (`corepack enable` puis `corepack prepare pnpm@10.18.3 --activate`)

## Installation
```bash
pnpm install
```

## Démarrage
Dans trois terminaux :
```bash
pnpm dev:website
pnpm dev:app
pnpm dev:backoffice
```

- Site vitrine : http://localhost:3000
- Espace collectivités : http://localhost:3001
- Back-office : http://localhost:3002

## Organisation
- `apps/website` : site public
- `apps/app` : espace collectivités
- `apps/backoffice` : administration interne
- `packages/ui` : exemple de composant React partagé
- `packages/tsconfig` : configuration TypeScript commune

## Ce qui n'est volontairement PAS inclus
Authentification, Supabase, base de données, permissions, RLS, Tailwind, shadcn/ui, déploiement et CI.
Ces briques seront ajoutées progressivement, pour comprendre et valider chaque étape.

## Vérifications
```bash
pnpm typecheck
pnpm build
```

## Déploiement futur
Chaque application peut être déployée séparément avec son répertoire `apps/<nom>`.
La configuration Docker/Coolify sera ajoutée lors de la mise en place de l'hébergement.
