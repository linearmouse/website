import { describe, expect, it } from 'vitest'
import app from './index'

describe('linearmouse-go worker', () => {
  it('redirects root to the website', async () => {
    const response = await app.request('https://go.linearmouse.app/')

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe('https://linearmouse.app/')
  })

  it('preserves existing target query and appends incoming query params', async () => {
    const response = await app.request('https://go.linearmouse.app/bug-report?foo=bar&foo=baz')

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe(
      'https://github.com/linearmouse/linearmouse/issues/new?template=bug_report.yml&labels=bug&foo=bar&foo=baz',
    )
  })

  it('matches paths case-insensitively', async () => {
    const response = await app.request('https://go.linearmouse.app/GitHub')

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe('https://github.com/linearmouse/linearmouse')
  })

  it('redirects pointer speed limitations to the issue', async () => {
    const response = await app.request('https://go.linearmouse.app/pointer-speed-limitations')

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe('https://github.com/linearmouse/linearmouse/issues/270')
  })

  it('returns method not allowed for non-get methods', async () => {
    const response = await app.request('https://go.linearmouse.app/github', {
      method: 'HEAD',
    })

    expect(response.status).toBe(405)
  })

  it('returns not found for unknown paths', async () => {
    const response = await app.request('https://go.linearmouse.app/unknown')

    expect(response.status).toBe(404)
  })
})
