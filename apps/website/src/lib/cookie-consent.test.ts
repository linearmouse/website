import { expect, it } from 'vitest'

import { cookieConsentCountries, isCookieConsentRequired } from './cookie-consent'

it('covers EU member states, EEA, the UK and Switzerland', () => {
  expect(cookieConsentCountries.size).toBe(27 + 3 + 1 + 1)

  for (const country of ['DE', 'FR', 'IE', 'IS', 'LI', 'NO', 'GB', 'CH']) {
    expect(isCookieConsentRequired(country)).toBe(true)
  }
})

it('does not require consent outside the listed countries', () => {
  for (const country of ['US', 'CN', 'JP', 'BR', 'XX', 'T1']) {
    expect(isCookieConsentRequired(country)).toBe(false)
  }
})

it('treats a missing country as not requiring consent', () => {
  expect(isCookieConsentRequired(undefined)).toBe(false)
  expect(isCookieConsentRequired(null)).toBe(false)
  expect(isCookieConsentRequired('')).toBe(false)
})

it('normalizes case and whitespace', () => {
  expect(isCookieConsentRequired(' de ')).toBe(true)
})
