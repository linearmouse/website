const countUrl = 'https://img.shields.io/github/stars/linearmouse/linearmouse.json'

export async function getGitHubStars() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)
  try {
    const response = await fetch(countUrl, { credentials: 'omit', signal: controller.signal })
    if (!response.ok) throw new Error('Star count unavailable')
    const badge: { message?: unknown } | null = await response.json()
    if (typeof badge?.message !== 'string' || !/^\d[\d,.]*[kKmM]?$/.test(badge.message)) {
      throw new Error('Invalid star count')
    }
    return badge.message
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}
