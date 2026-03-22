import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import app, { resetSchemaState } from './index'

const originalFetch = globalThis.fetch

beforeEach(() => {
  resetSchemaState()
})

afterEach(() => {
  globalThis.fetch = originalFetch
  vi.restoreAllMocks()
})

describe('linearmouse-schema worker', () => {
  it('redirects branch names to raw GitHub', async () => {
    const response = await app.request('https://schema.linearmouse.app/main')

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe(
      'https://raw.githubusercontent.com/linearmouse/linearmouse/main/Documentation/Configuration.json',
    )
  })

  it('redirects sha paths after stripping the prefix', async () => {
    const response = await app.request('https://schema.linearmouse.app/sha-abcdef')

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe(
      'https://raw.githubusercontent.com/linearmouse/linearmouse/abcdef/Documentation/Configuration.json',
    )
  })

  it('serves schema content directly for semver paths', async () => {
    globalThis.fetch = vi.fn(async () => {
      return new Response('{"ok":true}', {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      })
    }) as typeof fetch

    const response = await app.request('https://schema.linearmouse.app/1.2.3')

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toBe('application/json')
    expect(await response.text()).toBe('{"ok":true}')
  })

  it('returns not found when the upstream schema is missing', async () => {
    globalThis.fetch = vi.fn(async () => new Response(null, { status: 404 })) as typeof fetch

    const response = await app.request('https://schema.linearmouse.app/1.2.3')

    expect(response.status).toBe(404)
  })

  it('returns method not allowed for unsupported methods', async () => {
    const response = await app.request('https://schema.linearmouse.app/main', {
      method: 'POST',
    })

    expect(response.status).toBe(405)
  })

  it('returns not found for invalid paths', async () => {
    const response = await app.request('https://schema.linearmouse.app/no/slashes')

    expect(response.status).toBe(404)
  })
})
