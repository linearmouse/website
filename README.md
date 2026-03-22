# LinearMouse Monorepo

This repository now uses a pnpm workspace monorepo layout so multiple Cloudflare Workers apps and shared packages can live together.

## Layout

- `apps/website`: the current Linearmouse marketing site and update feed
- `apps/go`: short-link Worker for `go.linearmouse.app`
- `apps/schema`: schema proxy Worker for `schema.linearmouse.app`
- `packages/`: reserved for future shared packages and configs

## Workspace Commands

Install dependencies:

```bash
pnpm install
```

Run the website locally:

```bash
pnpm dev
```

Build the website:

```bash
pnpm build
```

Run the website tests:

```bash
pnpm test
```

Deploy the website Worker:

```bash
pnpm deploy
```

For Cloudflare Workers Builds, point the website Worker at `apps/website` as its root directory, matching Cloudflare's monorepo guidance.
