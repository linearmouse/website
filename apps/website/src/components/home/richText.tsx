import { cloneElement, isValidElement, type ReactNode } from 'react'

import type { MessagePart } from '#/paraglide/runtime'

import { HangingPunctuation } from './HangingPunctuation'

export type RichToken =
  | { type: 'text'; value: string }
  | { type: 'strong'; children: readonly RichToken[] }
  | { type: 'quote'; children: readonly RichToken[] }
  | { type: 'gradient'; children: readonly RichToken[] }
  | { type: 'marquee'; children: readonly RichToken[] }
  | { type: 'hangingPunctuation'; children: readonly RichToken[] }

function mapMarkupNameToTokenType(name: string): Exclude<RichToken['type'], 'text'> | null {
  switch (name) {
    case 'strong':
      return 'strong'
    case 'gradient':
      return 'gradient'
    case 'marquee':
      return 'marquee'
    case 'hang':
      return 'hangingPunctuation'
    case 'quote':
      return 'quote'
    default:
      return null
  }
}

export function messageToRichTokens(message: unknown): RichToken[] {
  if (typeof message !== 'function') {
    return []
  }

  const maybeRichMessage = message as {
    (): string
    parts?: () => MessagePart[]
  }

  const parts = typeof maybeRichMessage.parts === 'function'
    ? maybeRichMessage.parts()
    : [{ type: 'text', value: maybeRichMessage() } satisfies MessagePart]

  return messagePartsToRichTokens(parts)
}

export function messagePartsToRichTokens(parts: readonly MessagePart[]): RichToken[] {
  const root: RichToken[] = []
  const stack: Array<{ name: string; children: RichToken[] }> = []

  const append = (token: RichToken) => {
    const parent = stack.at(-1)
    if (parent) {
      parent.children.push(token)
      return
    }

    root.push(token)
  }

  for (const part of parts) {
    switch (part.type) {
      case 'text':
        if (part.value) {
          append({ type: 'text', value: part.value })
        }
        break
      case 'markup-start':
        stack.push({ name: part.name, children: [] })
        break
      case 'markup-end': {
        const frame = stack.pop()

        if (!frame) {
          break
        }

        if (frame.name !== part.name) {
          for (const child of frame.children) {
            append(child)
          }
          break
        }

        const tokenType = mapMarkupNameToTokenType(frame.name)
        if (tokenType) {
          append({ type: tokenType, children: frame.children })
        } else {
          for (const child of frame.children) {
            append(child)
          }
        }
        break
      }
      case 'markup-standalone': {
        const tokenType = mapMarkupNameToTokenType(part.name)
        if (tokenType) {
          append({ type: tokenType, children: [] })
        }
        break
      }
    }
  }

  while (stack.length > 0) {
    const frame = stack.pop()
    if (!frame) {
      continue
    }

    const tokenType = mapMarkupNameToTokenType(frame.name)
    if (tokenType) {
      append({ type: tokenType, children: frame.children })
      continue
    }

    for (const child of frame.children) {
      append(child)
    }
  }

  return root
}

export function renderRichTokens(
  tokens: readonly RichToken[],
  keyPrefix: string,
  options: { marquee?: ReactNode } = {},
): ReactNode[] {
  return tokens.map((token, index) => {
    const key = `${keyPrefix}-${index}`

    switch (token.type) {
      case 'text':
        return token.value ? <span key={key}>{token.value}</span> : null
      case 'strong':
        return (
          <strong key={key} className="font-semibold text-[color:var(--brand)]">
            {renderRichTokens(token.children, key, options)}
          </strong>
        )
      case 'quote':
        return (
          <q key={key} className="italic">
            {renderRichTokens(token.children, key, options)}
          </q>
        )
      case 'gradient':
        return (
          <span
            key={key}
            className="heading-gradient-text inline-block w-fit align-baseline bg-[linear-gradient(110deg,hsl(29_100%_55%)_0%,hsl(340_100%_60%)_48%,hsl(244_76%_60%)_100%)] bg-clip-text text-transparent"
          >
            {renderRichTokens(token.children, key, options)}
          </span>
        )
      case 'marquee':
        if (!options.marquee) {
          return null
        }

        return isValidElement(options.marquee)
          ? cloneElement(options.marquee, { key })
          : <span key={key}>{options.marquee}</span>
      case 'hangingPunctuation':
        return (
          <HangingPunctuation key={key}>
            {renderRichTokens(token.children, key, options)}
          </HangingPunctuation>
        )
    }
  })
}

export function splitRichTokensIntoLines(tokens: readonly RichToken[]): RichToken[][] {
  const lines: RichToken[][] = [[]]

  const pushLine = () => lines.push([])
  const pushToken = (token: RichToken) => {
    if (token.type === 'text' && !token.value) {
      return
    }

    lines.at(-1)?.push(token)
  }

  for (const token of tokens) {
    if (token.type === 'text') {
      const parts = token.value.split('\n')

      parts.forEach((part, index) => {
        if (part) {
          pushToken({ type: 'text', value: part })
        }

        if (index < parts.length - 1) {
          pushLine()
        }
      })

      continue
    }

    if (token.type === 'marquee') {
      pushToken(token)
      continue
    }

    const childLines = splitRichTokensIntoLines(token.children)

    childLines.forEach((childLine, index) => {
      if (childLine.length > 0) {
        pushToken({ ...token, children: childLine })
      }

      if (index < childLines.length - 1) {
        pushLine()
      }
    })
  }

  const nonEmptyLines = lines.filter((line) => line.length > 0)
  return nonEmptyLines.length > 0 ? nonEmptyLines : [[]]
}

export function richTokensToPlainText(tokens: readonly RichToken[]): string {
  const text = tokens
    .map((token) => {
      switch (token.type) {
        case 'text':
          return token.value.replace(/\n+/g, ' ')
        case 'marquee':
          return ''
        default:
          return richTokensToPlainText(token.children)
      }
    })
    .join('')

  return text.replace(/\s+/g, ' ').trim()
}
