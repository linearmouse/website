# linearmouse-go

Cloudflare Worker for `go.linearmouse.app`, migrated from `linearmouse/shorturl`.

## Behavior

- Supports the same short-link map as the original Go service
- Redirects with HTTP 307
- Accepts only `GET`
- Matches paths case-insensitively
- Appends incoming query parameters onto the destination URL

## Commands

```bash
pnpm --filter linearmouse-go dev
pnpm --filter linearmouse-go test
pnpm --filter linearmouse-go build
pnpm --filter linearmouse-go deploy
```
