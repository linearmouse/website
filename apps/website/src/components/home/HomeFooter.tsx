import { m } from '#/paraglide/messages'

import { containerClass } from './constants'
import { CookieConsent } from './CookieConsent'

export function HomeFooter() {
  return (
    <>
      <footer className="border-t border-[color:var(--line)] py-6">
        <div className={`${containerClass} flex flex-col gap-3 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between`}>
          <div>&copy; 2021-{new Date().getFullYear()} LinearMouse</div>
          <div className="flex items-center gap-4">
            <a
              href="https://crowdin.com/project/linearmouse"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors duration-200 hover:text-[color:var(--text)]"
            >
              {m.footer_help_translate()}
            </a>
            <a
              href="/privacy.html"
              className="transition-colors duration-200 hover:text-[color:var(--text)]"
            >
              {m.footer_privacy_policy()}
            </a>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </>
  )
}
