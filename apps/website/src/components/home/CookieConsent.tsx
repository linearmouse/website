import { useEffect, useState } from 'react'

import { cookieConsentStorageKey } from '#/lib/cookie-consent'
import { m } from '#/paraglide/messages'

export function CookieConsent({ required }: { required: boolean }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (required && !localStorage.getItem(cookieConsentStorageKey)) {
      setVisible(true)
    }
  }, [required])

  if (!visible) {
    return null
  }

  return (
    <div className="sticky bottom-4 z-40 px-4 pb-4">
      <div className="glass-surface mx-auto flex max-w-[600px] items-center justify-between gap-4 rounded-2xl px-5 py-3">
        <span className="text-xs text-[color:var(--muted)]">{m.cookie_description()}</span>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(cookieConsentStorageKey, '1')
            setVisible(false)
          }}
          className="shrink-0 rounded-full bg-[color:var(--brand)] px-4 py-1.5 text-xs font-medium text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out-quart)] hover:brightness-110 active:scale-[0.98]"
        >
          {m.ok()}
        </button>
      </div>
    </div>
  )
}
