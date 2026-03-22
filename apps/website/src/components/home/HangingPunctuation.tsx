import type { ReactNode } from 'react'

export function HangingPunctuation({ children }: { children: ReactNode }) {
  return <span className="heading-hanging-punctuation">{children}</span>
}
