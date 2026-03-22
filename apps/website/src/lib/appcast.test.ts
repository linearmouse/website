import { describe, expect, it } from 'vitest'

import { buildAppcastXml, matchesSparkle2 } from './appcast'

describe('buildAppcastXml', () => {
  it('renders GitHub releases into Sparkle appcast xml', () => {
    const xml = buildAppcastXml([
      {
        assets: [
          {
            browser_download_url:
              'https://github.com/linearmouse/linearmouse/releases/download/v1.2.3/LinearMouse.dmg',
          },
        ],
        body_html: '<p>Stable release</p>',
        draft: false,
        html_url: 'https://github.com/linearmouse/linearmouse/releases/tag/v1.2.3',
        name: 'v1.2.3',
        published_at: '2026-03-14T08:00:00Z',
        tag_name: 'v1.2.3',
      },
      {
        assets: [
          {
            browser_download_url:
              'https://github.com/linearmouse/linearmouse/releases/download/v1.3.0-beta.1/LinearMouse.dmg',
          },
        ],
        body_html: '<p>Beta release</p>',
        draft: false,
        html_url:
          'https://github.com/linearmouse/linearmouse/releases/tag/v1.3.0-beta.1',
        name: 'v1.3.0-beta.1',
        published_at: '2026-03-15T08:00:00Z',
        tag_name: 'v1.3.0-beta.1',
      },
    ])

    expect(xml).toContain('<title>LinearMouse</title>')
    expect(xml).toContain('<sparkle:version>1.2.3</sparkle:version>')
    expect(xml).toContain('<sparkle:channel>beta</sparkle:channel>')
    expect(xml).toContain('https://dl.linearmouse.org/v1.2.3/LinearMouse.dmg')
    expect(xml).toContain('<description><![CDATA[<p>Stable release</p>]]></description>')
  })

  it('skips draft releases and releases without assets', () => {
    const xml = buildAppcastXml([
      {
        assets: [],
        draft: false,
        html_url: 'https://example.com/no-asset',
        name: 'v1.0.0',
        published_at: '2026-03-14T08:00:00Z',
        tag_name: 'v1.0.0',
      },
      {
        assets: [
          {
            browser_download_url:
              'https://github.com/linearmouse/linearmouse/releases/download/v1.0.1/LinearMouse.dmg',
          },
        ],
        draft: true,
        html_url: 'https://example.com/draft',
        name: 'v1.0.1',
        published_at: '2026-03-14T08:00:00Z',
        tag_name: 'v1.0.1',
      },
    ])

    expect(xml).not.toContain('<item>')
  })
})

describe('matchesSparkle2', () => {
  it('matches legacy Sparkle 2 user agents', () => {
    expect(matchesSparkle2('LinearMouse/0.9.0 Sparkle/2.0.1')).toBe(true)
    expect(matchesSparkle2('LinearMouse/0.9.0 Sparkle/2.1.0')).toBe(false)
    expect(matchesSparkle2(null)).toBe(false)
  })
})
