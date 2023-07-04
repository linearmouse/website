import { TranslationQuery } from 'next-translate'
import useTranslation from 'next-translate/useTranslation'
import { cloneElement, ReactElement, ReactNode } from 'react'

const formatElements = (text: string, componentElements: Record<string, ReactElement>) => {
  const token = /<(\w+)>(.*?)<\/\1>|<(\w+)\s*\/>|([^<]+)/g

  const nodes: ReactNode[] = []

  for (let match, index = 0; (match = token.exec(text)); index++) {
    const [, _tag, children, _selfCloseTag, text] = match

    const tag = _tag ?? _selfCloseTag

    if (!tag) {
      nodes.push(text)
      continue
    }

    const element = cloneElement(
      componentElements[tag] ?? <></>,
      {
        key: index
      },
      formatElements(children, componentElements)
    )
    nodes.push(element)
  }

  return nodes
}

const useTranslationEx = (defaultNS?: string) => {
  const { t, lang } = useTranslation(defaultNS)

  const tE = (
    i18nKey: string | TemplateStringsArray,
    query?: TranslationQuery | null,
    options?: {
      returnObjects?: boolean
      fallback?: string | string[]
      default?: string
      ns?: string
      componentElements?: Record<string, ReactElement>
    }
  ) => {
    const text = t(i18nKey, query, options)

    if (!text || !options?.componentElements) return text

    return formatElements(text, options.componentElements)
  }

  return { t, tE, lang }
}

export default useTranslationEx
