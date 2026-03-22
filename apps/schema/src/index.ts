import { Hono } from 'hono'

const pathPattern = /^\/(?:(\d+(?:\.\d+){2}(?:-[^/]+)?)|(?:sha-)([^/]+)|([^/]+))$/
const rawBaseUrl = 'https://raw.githubusercontent.com/linearmouse/linearmouse'
const schemaPath = '/Documentation/Configuration.json'
const schemaCache = new Map<string, ArrayBuffer>()
const inFlightRequests = new Map<string, Promise<ArrayBuffer | null>>()

function resetSchemaState() {
  schemaCache.clear()
  inFlightRequests.clear()
}

function buildSchemaUrl(head: string) {
  return `${rawBaseUrl}/${encodeURIComponent(head)}${schemaPath}`
}

async function loadSchema(schemaUrl: string) {
  const cached = schemaCache.get(schemaUrl)
  if (cached) {
    return cached
  }

  const existingRequest = inFlightRequests.get(schemaUrl)
  if (existingRequest) {
    return existingRequest
  }

  const request = (async () => {
    let response: Response

    try {
      response = await fetch(schemaUrl)
    } catch (error) {
      throw new Error(`client.Get: ${error instanceof Error ? error.message : String(error)}`)
    }

    if (response.status === 404) {
      return null
    }

    if (!response.ok) {
      throw new Error(`client.Get: StatusCode: ${response.status}`)
    }

    const bytes = await response.arrayBuffer()
    schemaCache.set(schemaUrl, bytes)
    return bytes
  })()

  inFlightRequests.set(schemaUrl, request)

  try {
    return await request
  } finally {
    inFlightRequests.delete(schemaUrl)
  }
}

const app = new Hono()

app.all('*', async (c) => {
  const url = new URL(c.req.url)
  const match = pathPattern.exec(url.pathname)

  if (!match) {
    return c.text('404 page not found', 404)
  }

  if (c.req.method !== 'GET' && c.req.method !== 'HEAD') {
    return c.text('Method Not Allowed', 405)
  }

  const version = match[1]
  const commit = match[2]
  const branchOrTag = match[3]

  const head = version ? `v${version}` : commit || branchOrTag
  const shouldRedirect = !version
  const schemaUrl = buildSchemaUrl(head)

  if (shouldRedirect) {
    return c.redirect(schemaUrl, 307)
  }

  try {
    const schema = await loadSchema(schemaUrl)

    if (!schema) {
      return c.text('404 page not found', 404)
    }

    return new Response(c.req.method === 'HEAD' ? null : schema, {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'content-length': String(schema.byteLength),
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal Server Error'
    return c.text(message, 500)
  }
})

export default app
export { buildSchemaUrl, loadSchema, resetSchemaState }
