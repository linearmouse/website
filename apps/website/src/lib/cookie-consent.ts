/**
 * Countries (ISO 3166-1 alpha-2) whose visitors see the cookie consent notice.
 * Trim or extend this list to change where the notice appears.
 */
export const cookieConsentCountries: ReadonlySet<string> = new Set([
  // EU member states
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
  'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA (non-EU)
  'IS', 'LI', 'NO',
  // United Kingdom
  'GB',
  // Switzerland
  'CH',
])

/** Request header Cloudflare sets to the visitor's country. */
export const countryHeaderName = 'cf-ipcountry'

export const cookieConsentStorageKey = 'cookie_consent_informed'

/** Unknown or missing countries are treated as not requiring the notice. */
export function isCookieConsentRequired(country?: string | null) {
  return country ? cookieConsentCountries.has(country.trim().toUpperCase()) : false
}

/** Client-side counterpart: reads the decision the server rendered onto <html>. */
export function readCookieConsentRequiredFromDocument() {
  return document.documentElement.dataset.cookieConsent === 'required'
}
