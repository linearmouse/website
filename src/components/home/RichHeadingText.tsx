import type { ReactNode } from 'react'

import { renderRichTokens, splitRichTokensIntoLines, type RichToken } from './richText'

type RichHeadingTextProps = {
  tokens: readonly RichToken[]
  keyPrefix: string
  options?: { marquee?: ReactNode }
}

export function RichHeadingText({ tokens, keyPrefix, options }: RichHeadingTextProps) {
  const lines = splitRichTokensIntoLines(tokens)

  return (
    <>
      {lines.map((line, index) => {
        const key = `${keyPrefix}-line-${index}`

        return (
          <span key={key} className="block">
            <span className="relative inline-block">
              {renderRichTokens(line, key, options)}
            </span>
          </span>
        )
      })}
    </>
  )
}
