import { Hono } from 'hono'

const urlMap = new Map<string, string>([
  ['/', 'https://linearmouse.app/'],
  ['/github', 'https://github.com/linearmouse/linearmouse'],
  ['/accessibility-permission', 'https://github.com/linearmouse/linearmouse/blob/main/ACCESSIBILITY.md'],
  ['/disable-pointer-acceleration-and-speed', 'https://github.com/linearmouse/linearmouse/discussions/201'],
  ['/pointer-speed-limitations', 'https://github.com/linearmouse/linearmouse/issues/270'],
  ['/bug-report', 'https://github.com/linearmouse/linearmouse/issues/new?template=bug_report.yml&labels=bug'],
  ['/feature-request', 'https://github.com/linearmouse/linearmouse/issues/new?template=feature_request.yml&labels=enhancement'],
  ['/donate', 'https://github.com/sponsors/linearmouse'],
])

function mergeQuery(target: string, requestUrl: URL) {
  const targetUrl = new URL(target)

  for (const [key, value] of requestUrl.searchParams) {
    targetUrl.searchParams.append(key, value)
  }

  return targetUrl.toString()
}

const app = new Hono()

app.all('*', async (c) => {
  const requestUrl = new URL(c.req.url)
  const target = urlMap.get(requestUrl.pathname.toLowerCase())

  if (!target) {
    return c.text('404 page not found', 404)
  }

  if (c.req.method !== 'GET') {
    return c.text('Method Not Allowed', 405)
  }

  return c.redirect(mergeQuery(target, requestUrl), 307)
})

export default app
