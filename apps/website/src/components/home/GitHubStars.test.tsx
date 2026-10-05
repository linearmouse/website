// @vitest-environment jsdom

import { act, cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import { getGitHubStars } from '#/lib/github-stars'

import { GitHubStars } from './GitHubStars'

const loader = vi.hoisted(() => ({ stars: undefined as Promise<string | null> | undefined }))

vi.mock('@tanstack/react-router', () => ({ useLoaderData: () => loader }))

vi.mock('#/paraglide/messages', () => ({
  m: { github_stars: () => 'GitHub stars' },
}))

afterEach(() => {
  cleanup()
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

it('shows Suspense fallbacks for a shared loader promise and handles timeout and success', async () => {
  vi.useFakeTimers()
  const fetchCount = vi.fn((_url: string, options: RequestInit) =>
    new Promise<Response>((_resolve, reject) => {
      options.signal!.addEventListener('abort', () => {
        reject(new DOMException('Aborted', 'AbortError'))
      })
    }),
  )
  vi.stubGlobal('fetch', fetchCount)

  loader.stars = getGitHubStars()
  let first!: ReturnType<typeof render>
  await act(async () => { first = render(<><GitHubStars /><GitHubStars /></>) })
  expect(first.container.querySelectorAll('[data-loading]')).toHaveLength(2)
  expect(fetchCount).toHaveBeenCalledTimes(1)
  await act(async () => { await vi.advanceTimersByTimeAsync(8000) })
  expect(screen.getAllByText('—')).toHaveLength(2)
  expect(first.container.querySelector('[data-loading]')).toBeNull()
  first.unmount()

  fetchCount.mockResolvedValueOnce(new Response(JSON.stringify({ message: '6.9k' })))
  loader.stars = getGitHubStars()
  await act(async () => { render(<GitHubStars />) })
  expect(fetchCount).toHaveBeenCalledTimes(2)
  expect(screen.getByRole('link').getAttribute('aria-label')).toBe('GitHub stars: 6.9k')
})
