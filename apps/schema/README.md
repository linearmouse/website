# linearmouse-schema

Cloudflare Worker for `schema.linearmouse.app`, migrated from `linearmouse/schema`.

## Behavior

- `/<semver>` fetches and serves `Documentation/Configuration.json` from the matching `v<semver>` ref
- `/sha-<commit>` and `/<branch-or-tag>` redirect to the raw GitHub schema URL with HTTP 307
- Accepts only `GET` and `HEAD`
- Returns `404` for invalid paths or missing upstream schema files
- Caches fetched versioned schemas in memory and deduplicates concurrent fetches

## Commands

```bash
pnpm --filter linearmouse-schema dev
pnpm --filter linearmouse-schema test
pnpm --filter linearmouse-schema build
pnpm --filter linearmouse-schema deploy
```
