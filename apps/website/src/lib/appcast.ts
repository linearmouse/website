import { create } from 'xmlbuilder2'

const APPCAST_PATH = '/appcast.xml'
const GITHUB_RELEASES_URL =
  'https://api.github.com/repos/linearmouse/linearmouse/releases?per_page=30'
const GITHUB_DOWNLOAD_PREFIX =
  'https://github.com/linearmouse/linearmouse/releases/download/'
const CDN_DOWNLOAD_PREFIX = 'https://dl.linearmouse.org/'
const APPCAST_MIN_UPDATE_INTERVAL_MS = 60_000

const uaSparkle2Re = /\bSparkle\/2\.0\.[01]\b/

const sparkle2Appcast = `<rss xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
  <channel>
    <title>LinearMouse</title>
    <link>https://github.com/linearmouse/linearmouse</link>
    <item>
      <title>v0.6.1</title>
      <sparkle:version>0.6.1</sparkle:version>
      <pubDate>Fri, 10 Jun 2022 06:09:49 GMT</pubDate>
      <link>https://github.com/linearmouse/linearmouse/releases/tag/v0.6.1</link>
      <description><![CDATA[
<h2 dir="auto">What's Changed</h2>
<h3 dir="auto">Bug fixes</h3>
<ul dir="auto">
<li>Fix the launch at login issue in some cases by <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/lujjjh/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/lujjjh">@lujjjh</a> in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1263448488" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/132" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/132/hovercard" href="https://github.com/linearmouse/linearmouse/pull/132">#132</a></li>
<li>Fix freezing after granting accessibility permission by <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/lujjjh/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/lujjjh">@lujjjh</a> in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1265513799" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/136" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/136/hovercard" href="https://github.com/linearmouse/linearmouse/pull/136">#136</a></li>
</ul>
<h3 dir="auto">Other changes</h3>
<ul dir="auto">
<li>Update translations (Italian and Portuguese, Brazilian) by <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/LuigiPiccoli17/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/LuigiPiccoli17">@LuigiPiccoli17</a> in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1260318189" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/131" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/131/hovercard" href="https://github.com/linearmouse/linearmouse/pull/131">#131</a></li>
<li>Universal back and forward: Ignore Dota 2 by <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/aramann/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/aramann">@aramann</a> in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1263521521" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/133" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/133/hovercard" href="https://github.com/linearmouse/linearmouse/pull/133">#133</a></li>
<li>Add a guide on how to grant Accessibility permission by <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/lujjjh/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/lujjjh">@lujjjh</a> in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1265978312" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/137" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/137/hovercard" href="https://github.com/linearmouse/linearmouse/pull/137">#137</a></li>
</ul>
<h2 dir="auto">New Contributors</h2>
<ul dir="auto">
<li><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/aramann/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/aramann">@aramann</a> made their first contribution in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1263521521" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/133" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/133/hovercard" href="https://github.com/linearmouse/linearmouse/pull/133">#133</a></li>
<li><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/LuigiPiccoli17/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/LuigiPiccoli17">@LuigiPiccoli17</a> made their first contribution in <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="1260318189" data-permission-text="Title is private" data-url="https://github.com/linearmouse/linearmouse/issues/131" data-hovercard-type="pull_request" data-hovercard-url="/linearmouse/linearmouse/pull/131/hovercard" href="https://github.com/linearmouse/linearmouse/pull/131">#131</a></li>
</ul>
<p dir="auto"><strong>Full Changelog</strong>: <a class="commit-link" href="https://github.com/linearmouse/linearmouse/compare/v0.6.0...v0.6.1"><tt>v0.6.0...v0.6.1</tt></a></p>]]></description>
      <enclosure url="https://dl.linearmouse.org/v0.6.1/LinearMouse.dmg" type="application/octet-stream"/>
    </item>
  </channel>
</rss>`

type GitHubReleaseAsset = {
  browser_download_url: string
}

type GitHubRelease = {
  assets?: GitHubReleaseAsset[]
  body?: string | null
  body_html?: string | null
  draft: boolean
  html_url: string
  name: string | null
  published_at: string | null
  tag_name: string
}

type FetchLike = typeof fetch
type AppcastEnv = Pick<Env, 'GITHUB_TOKEN'>
type WaitUntilLike = (promise: Promise<unknown>) => void

let cachedAppcastXml: string | null = null
let appcastLastUpdatedAt = 0
let appcastUpdatePromise: Promise<void> | null = null

function toPubDate(value: string | null) {
  if (!value) {
    return new Date(0).toUTCString()
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return new Date(0).toUTCString()
  }

  return date.toUTCString()
}

function toChannel(tagName: string) {
  return tagName.includes('-beta.') ? 'beta' : ''
}

function toEnclosureUrl(downloadUrl: string) {
  if (downloadUrl.startsWith(GITHUB_DOWNLOAD_PREFIX)) {
    return `${CDN_DOWNLOAD_PREFIX}${downloadUrl.slice(GITHUB_DOWNLOAD_PREFIX.length)}`
  }

  return downloadUrl
}

function toDescription(release: GitHubRelease) {
  return release.body_html ?? release.body ?? ''
}

function appendRelease(channelNode: ReturnType<ReturnType<typeof create>['ele']>, release: GitHubRelease) {
  const asset = release.assets?.[0]

  if (release.draft || !asset) {
    return
  }

  const title = release.name || release.tag_name
  const version = release.tag_name.replace(/^v/, '')
  const channel = toChannel(release.tag_name)
  const description = toDescription(release)
  const itemNode = channelNode.ele('item')

  itemNode.ele('title').txt(title)
  itemNode.ele('sparkle:version').txt(version)

  if (channel) {
    itemNode.ele('sparkle:channel').txt(channel)
  }

  itemNode.ele('pubDate').txt(toPubDate(release.published_at))
  itemNode.ele('link').txt(release.html_url)
  itemNode.ele('description').dat(description)
  itemNode
    .ele('enclosure')
    .att('url', toEnclosureUrl(asset.browser_download_url))
    .att('type', 'application/octet-stream')
}

export function buildAppcastXml(releases: GitHubRelease[]) {
  const rssNode = create({ version: '1.0' }).ele('rss', {
    'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
    'xmlns:sparkle': 'http://www.andymatuschak.org/xml-namespaces/sparkle',
    version: '2.0',
  })
  const channelNode = rssNode.ele('channel')

  channelNode.ele('title').txt('LinearMouse')
  channelNode.ele('link').txt('https://linearmouse.app')

  for (const release of releases) {
    appendRelease(channelNode, release)
  }

  return rssNode.end({
    headless: true,
    prettyPrint: true,
    indent: '  ',
    newline: '\n',
  })
}

async function fetchGitHubReleases(fetchImpl: FetchLike, env: AppcastEnv) {
  const token = env.GITHUB_TOKEN
  const response = await fetchImpl(GITHUB_RELEASES_URL, {
    headers: {
      Accept: 'application/vnd.github.html+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      'User-Agent': 'linearmouse-website-appcast',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  if (!response.ok) {
    throw new Error(`GitHub releases request failed: ${response.status}`)
  }

  return (await response.json()) as GitHubRelease[]
}

async function updateAppcast(fetchImpl: FetchLike, env: AppcastEnv) {
  const releases = await fetchGitHubReleases(fetchImpl, env)

  cachedAppcastXml = buildAppcastXml(releases)
  appcastLastUpdatedAt = Date.now()
}

export async function getAppcastXml(
  env: AppcastEnv,
  fetchImpl: FetchLike = fetch,
  waitUntil?: WaitUntilLike,
) {
  const isFresh =
    cachedAppcastXml !== null &&
    Date.now() - appcastLastUpdatedAt < APPCAST_MIN_UPDATE_INTERVAL_MS

  if (isFresh) {
    return cachedAppcastXml
  }

  if (!appcastUpdatePromise) {
    appcastUpdatePromise = updateAppcast(fetchImpl, env).finally(() => {
      appcastUpdatePromise = null
    })
  }

  if (cachedAppcastXml !== null) {
    if (waitUntil) {
      waitUntil(appcastUpdatePromise)
    }

    return cachedAppcastXml
  }

  await appcastUpdatePromise

  if (!cachedAppcastXml) {
    throw new Error('appcast.xml not ready')
  }

  return cachedAppcastXml
}

export function matchesSparkle2(userAgent: string | null) {
  return userAgent !== null && uaSparkle2Re.test(userAgent)
}

export async function handleAppcastRequest(
  request: Request,
  env: AppcastEnv,
  waitUntil?: WaitUntilLike,
) {
  const { pathname } = new URL(request.url)

  if (pathname !== APPCAST_PATH) {
    return null
  }

  if (matchesSparkle2(request.headers.get('user-agent'))) {
    return new Response(sparkle2Appcast, {
      headers: {
        'Cache-Control': 'max-age=0',
        'Content-Type': 'text/xml; charset=utf-8',
      },
    })
  }

  const appcastXml = await getAppcastXml(env, fetch, waitUntil)

  return new Response(appcastXml, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
    },
  })
}
