FROM node:24-slim AS deps
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

FROM node:24-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

FROM node:24-slim AS runner
WORKDIR /app

RUN apt update && apt install -y wget

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

HEALTHCHECK --timeout=3s --start-period=10s \
    CMD wget -nv -t1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
