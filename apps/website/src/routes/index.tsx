import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '#/components/home'
import { getGitHubStars } from '#/lib/github-stars'
import { getAlternateLanguageLinks, getCanonicalUrl } from '#/lib/seo'
import { m } from '#/paraglide/messages'
import { getLocale } from '#/paraglide/runtime'

export const Route = createFileRoute('/')({
  loader: () => ({ stars: getGitHubStars() }),
  staleTime: 30 * 60 * 1000,
  preloadStaleTime: 30 * 60 * 1000,
  head: () => ({
    links: [
      {
        rel: 'canonical',
        href: getCanonicalUrl(getLocale()),
      },
      ...getAlternateLanguageLinks(),
    ],
    meta: [
      {
        title: m.title(),
      },
      {
        name: 'description',
        content: m.description(),
      },
      {
        property: 'og:url',
        content: getCanonicalUrl(getLocale()),
      },
    ],
  }),
  component: HomePage,
})
