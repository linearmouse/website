# LinearMouse Website

Marketing site and update feed for [LinearMouse](https://linearmouse.app), built with TanStack Start and deployed to Cloudflare Workers.

This app now lives inside the repository's pnpm workspace monorepo at `apps/website`.

## Stack

- React 19
- TanStack Start + TanStack Router
- Vite
- Tailwind CSS v4
- Paraglide / inlang for localized routes and messages
- Cloudflare Workers via Wrangler

## What Lives Here

- The localized homepage and marketing content
- Theme switching and cookie-backed theme persistence
- Download entry points for the latest LinearMouse release
- `/appcast.xml` generation for Sparkle updates, backed by GitHub releases

## Requirements

- Node.js 20+
- pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the local dev server on `http://localhost:3000`:

```bash
pnpm --filter linearmouse-website dev
```

Build for production:

```bash
pnpm --filter linearmouse-website build
```

Preview the production build locally:

```bash
pnpm --filter linearmouse-website preview
```

Run tests:

```bash
pnpm --filter linearmouse-website test
```

Regenerate Cloudflare Worker types after changing `wrangler.jsonc`:

```bash
pnpm --filter linearmouse-website cf-typegen
```

## Project Structure

- `src/routes/`: TanStack Router file-based routes
- `src/components/home/`: homepage sections and interactive UI
- `src/lib/appcast.ts`: Sparkle appcast generation and GitHub release fetching
- `src/lib/seo.ts`: localized canonical and alternate URL helpers
- `messages/`: localized message catalogs
- `public/`: static assets, icons, screenshots, and verification files
- `wrangler.jsonc`: Cloudflare Worker configuration

From the monorepo root these paths are under `apps/website/`.

## Internationalization

This site uses Paraglide for message generation and localized URLs.

- Source messages are compiled into `src/paraglide/`
- Locale files live in `messages/`
- Route localization is configured in `vite.config.ts`

When changing locale configuration, regenerate any derived files before committing.

## Appcast and GitHub Releases

`/appcast.xml` is served by the Worker and generated from the latest GitHub releases in the `linearmouse/linearmouse` repository.

The Worker expects a `GITHUB_TOKEN` secret for GitHub API access:

```bash
wrangler secret put GITHUB_TOKEN
```

If you update Worker bindings or secrets metadata in `wrangler.jsonc`, run:

```bash
pnpm --filter linearmouse-website cf-typegen
```

## Deployment

Deploy to Cloudflare Workers with:

```bash
pnpm --filter linearmouse-website deploy
```

That command builds the app and then runs `wrangler deploy`.
